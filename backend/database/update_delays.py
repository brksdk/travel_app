import psycopg2
import requests
from datetime import datetime

# Datenbank-Konfiguration
DB_CONFIG = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': '*******',
    'host': '*********',
    'port': '5432'
}

# Healthcheck-URL
HEALTHCHECK_URL = "https://hc-ping.com/d0ce0094-1f48-4bd6-ac7c-36844f20f21b"

# SQL 1: Aktualisiere latest_train_delays (letzte 40 Tage)
SQL_UPDATE_LATEST = """
DELETE FROM public.latest_train_delays
WHERE planned_arrival < NOW() - INTERVAL '40 days';

INSERT INTO public.latest_train_delays (
    station_name,
    train_number,
    train_classification,
    planned_arrival,
    actual_arrival,
    planned_departure,
    actual_departure,
    delay_arrival_minutes,
    delay_departure_minutes
)
SELECT DISTINCT ON (station_name, train_number, DATE(planned_arrival)) 
    station_name,
    train_number,
    train_classification,
    planned_arrival,
    actual_arrival,
    planned_departure,
    actual_departure,
    delay_arrival_minutes,
    delay_departure_minutes
FROM public.train_delays
WHERE train_classification IN ('ICE', 'IC')
AND planned_arrival >= NOW() - INTERVAL '40 days'
ORDER BY station_name, train_number, DATE(planned_arrival), actual_arrival DESC;
"""

# SQL 2: Durchschnittliche Verspätung pro Bahnhof - station_avg_7_30
SQL_UPDATE_STATION_AVG = """
TRUNCATE TABLE public.station_avg_7_30;

INSERT INTO public.station_avg_7_30 (
    station_name, 
    avg_delay_last_30_days, 
    avg_delay_last_7_days
)
SELECT 
    t.station_name,
    ROUND(AVG(delay_arrival_minutes) FILTER (
        WHERE delay_arrival_minutes IS NOT NULL 
        AND planned_arrival >= NOW() - INTERVAL '30 days'
    ))::INTEGER,
    ROUND(AVG(delay_arrival_minutes) FILTER (
        WHERE delay_arrival_minutes IS NOT NULL 
        AND planned_arrival >= NOW() - INTERVAL '7 days'
    ))::INTEGER
FROM public.latest_train_delays t
WHERE t.train_classification IN ('ICE', 'IC')
GROUP BY t.station_name
ORDER BY t.station_name;
"""

# SQL 3: Durchschnittliche Verspätung pro Verbindung - train_avg_7_30
SQL_UPDATE_TRAIN_AVG = """
TRUNCATE TABLE public.train_avg_7_30;

INSERT INTO public.train_avg_7_30 (
    train_number, 
    train_classification,
    avg_delay_last_30_days, 
    avg_delay_last_7_days,
    avg_departure_delay_last_30_days,
    avg_departure_delay_last_7_days
)
SELECT 
    t.train_number,
    t.train_classification,
    AVG(delay_arrival_minutes) FILTER (
        WHERE delay_arrival_minutes IS NOT NULL 
        AND planned_arrival >= NOW() - INTERVAL '30 days'
    ),
    AVG(delay_arrival_minutes) FILTER (
        WHERE delay_arrival_minutes IS NOT NULL 
        AND planned_arrival >= NOW() - INTERVAL '7 days'
    ),
    AVG(delay_departure_minutes) FILTER (
        WHERE delay_departure_minutes IS NOT NULL 
        AND planned_departure >= NOW() - INTERVAL '30 days'
    ),
    AVG(delay_departure_minutes) FILTER (
        WHERE delay_departure_minutes IS NOT NULL 
        AND planned_departure >= NOW() - INTERVAL '7 days'
    )
FROM public.latest_train_delays t
WHERE t.train_classification IN ('ICE', 'IC')
GROUP BY t.train_number, t.train_classification
ORDER BY t.train_number::integer;
"""

# Ausführung der SQLs
def update_delays():
    conn = psycopg2.connect(**DB_CONFIG)
    cur = conn.cursor()
    try:
        cur.execute(SQL_UPDATE_LATEST)
        print("[1/3] latest_train_delays aktualisiert.")

        cur.execute(SQL_UPDATE_STATION_AVG)
        print("[2/3] station_avg_7_30 aktualisiert.")

        cur.execute(SQL_UPDATE_TRAIN_AVG)
        print("[3/3] train_avg_7_30 aktualisiert.")

        conn.commit()

        # Healthcheck Ping
        requests.get(HEALTHCHECK_URL)
        print("Healthcheck gesendet.")

    except Exception as e:
        conn.rollback()
        print("Fehler:", e)
    finally:
        cur.close()
        conn.close()

if __name__ == "__main__":
    update_delays()

