import psycopg2

# Datenbankverbindung
DB_CONFIG = {
    'dbname': 'DEIN_DBNAME',
    'user': 'DEIN_USER',
    'password': 'DEIN_PASSWORT',
    'host': 'localhost',
    'port': '5432'
}

def update_avg_delays():
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        cur = conn.cursor()

        cur.execute("""
            UPDATE public.sollfahrplan_reihenfolge sfr
            SET station_avg_30 = sa.avg_delay_last_30_days
            FROM public.station_avg_7_30 sa
            WHERE sfr.halt = sa.station_name;
        """)

        cur.execute("""
            UPDATE public.sollfahrplan_reihenfolge sfr
            SET train_avg_30 = ta.avg_delay_last_30_days
            FROM public.train_avg_7_30 ta
            WHERE sfr.zug = ta.train_number::integer;
        """)

        conn.commit()

    except Exception:
        pass  # Optional: Fehlerbehandlung hier hinzufügen
    finally:
        if conn:
            cur.close()
            conn.close()

if __name__ == "__main__":
    update_avg_delays()
