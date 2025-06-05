import requests
import psycopg2
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta
import time
import re

# API-Konfiguration
API_BASE_URL = 'https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/'
HEADERS = {
    'DB-Api-Key': 'fb1fd4aa91e7f15e2787*********',
    'DB-Client-Id': 'd046946af30666821**************'
}

# Datenbank-Konfiguration
DB_NAME = "postgres"
DB_USER = "postgres"
DB_PASSWORD = "*********"
DB_HOST = "**********"
DB_PORT = "5432"

# Manuelle Stationenliste für die Abfrage
STATIONS = {
  '8000774'	:	'Baden Baden'	,
'8000943'	:	'Biberach (Riß)'	,
'8000055'	:	'Bruchsal'	,
'8000077'	:	'Donaueschingen'	,
'8000107'	:	'Freiburg (Breisgau) Hbf'	,
'8000112'	:	'Friedrichshafen Stadt'	,
'8000156'	:	'Heidelberg Hbf'	,
'8000191'	:	'Karlsruhe Hbf'	,
'8003184'	:	'Karlsruhe-Durlach'	,
'8003400'	:	'Konstanz'	,
'8003494'	:	'Lahr (Schwarzw)'	,
'8000244'	:	'Mannheim Hbf'	,
'8004124'	:	'Müllheim (Baden)'	,
'8000290'	:	'Offenburg'	,
'8000302'	:	'Plochingen'	,
'8000880'	:	'Radolfzell'	,
'8004965'	:	'Ravensburg'	,
'8000073'	:	'Singen (Hohentw)'	,
'8005644'	:	'St. Georgen (Schwarzw)'	,
'8000096'	:	'Stuttgart Hbf'	,
'8000170'	:	'Ulm Hbf'	,
'8006053'	:	'Vaihingen (Enz)'	,
'8000010'	:	'Aschaffenburg'	,
'8000009'	:	'Ansbach'	,
'8000013'	:	'Augsburg'	,
'8000025'	:	'Bamberg'	,
'8001338'	:	'Coburg'	,
'8000078'	:	'Donauwörth'	,
'8001844'	:	'Erlangen'	,
'8000108'	:	'Freilassing'	,
'8002187'	:	'Garmisch-Partenkirchen'	,
'8000139'	:	'Günzburg'	,
'8000183'	:	'Ingolstadt'	,
'8000228'	:	'Lichtenfels (Oberfranken)'	,
'8000230'	:	'Lindau (Bodensee)'	,
'8004185'	:	'Murnau am Staffelsee'	,
'8000261'	:	'München Hbf'	,
'8004158'	:	'München-Pasing'	,
'8000262'	:	'München Ost'	,
'8006730'	:	'Neu-Ulm'	,
'8000284'	:	'Nürnberg'	,
'8000298'	:	'Passau'	,
'8000301'	:	'Plattling'	,
'8004885'	:	'Prien am Chiemsee'	,
'8000309'	:	'Regensburg'	,
'8000320'	:	'Rosenheim'	,
'8000095'	:	'Straubing'	,
'8000116'	:	'Traunstein'	,
'8000122'	:	'Treuchtlingen'	,
'8005927'	:	'Tutzing'	,
'8000220'	:	'Weilheim in Oberbayern'	,
'8000260'	:	'Würzburg'	,
'8010004'	:	'Angermünde'	,
'8011160'	:	'Berlin Hbf'	,
'8010255'	:	'Berlin Ostbahnhof'	,
'8011102'	:	'Berlin Gesundbrunnen'	,
'8010404'	:	'Berlin-Spandau'	,
'8011113'	:	'Berlin Südkreuz'	,
'8011162'	:	'Berlin Ostkreuz'	,
'8010405'	:	'Berlin-Wannsee'	,
'8010406'	:	'Berlin Zoologischer Garten'	,
'8010060'	:	'Brandenburg Hbf'	,
'8013470'	:	'Bernau (b Berlin)'	,
'8010093'	:	'Eberswalde Hbf'	,
'8012666'	:	'Potsdam Hbf'	,
'8010282'	:	'Prenzlau'	,
'8010382'	:	'Wittenberge'	,
'8000020'	:	'Bad Hersfeld'	,
'8000031'	:	'Bensheim'	,
'8000068'	:	'Darmstadt'	,
'8000090'	:	'Eichenberg'	,
'8000105'	:	'Frankfurt (Main) Hbf'	,
'8002041'	:	'Frankfurt (Main) Süd'	,
'8070003'	:	'Frankfurt am Main Flughafen Fernbahnhof'	,
'8002042'	:	'Frankfurt (Main) West'	,
'8000111'	:	'Friedberg'	,
'8000115'	:	'Fulda'	,
'8000124'	:	'Gießen'	,
'8000150'	:	'Hanau'	,
'8003200'	:	'Kassel-Wilhelmshöhe'	,
'8003680'	:	'Limburg Süd'	,
'8000337'	:	'Marburg (Lahn)'	,
'8000891'	:	'Schlüchtern'	,
'8000129'	:	'Treysa'	,
'8000368'	:	'Wabern'	,
'8000250'	:	'Wiesbaden Hbf'	,
'8011044'	:	'Anklam'	,
'8010018'	:	'Bad Kleinen'	,
'8010033'	:	'Bergen auf Rügen'	,
'8011191'	:	'Ostseebad Binz'	,
'8010066'	:	'Bützow'	,
'8010139'	:	'Greifswald'	,
'8010216'	:	'Ludwigslust'	,
'8012763'	:	'Ribnitz-Damgarten West'	,
'8010304'	:	'Rostock Hbf'	,
'8010268'	:	'Pasewalk'	,
'8010324'	:	'Schwerin Hbf'	,
'8010338'	:	'Stralsund Hbf'	,
'8010355'	:	'Velgast'	,
'8013236'	:	'Warnemünde'	,
'8010396'	:	'Züssow'	,
'8000935'	:	'Bad Bevensen'	,
'8000049'	:	'Braunschweig Hbf'	,
'8000050'	:	'Bremen Hbf'	,
'8000064'	:	'Celle'	,
'8000070'	:	'Delmenhorst'	,
'8001443'	:	'Diepholz'	,
'8001768'	:	'Emden Hbf'	,
'8001767'	:	'Emden Außenhafen'	,
'8000128'	:	'Göttingen'	,
'8000152'	:	'Hannover Hbf'	,
'8000169'	:	'Hildesheim Hbf'	,
'8003545'	:	'Langenhagen Mitte'	,
'8000225'	:	'Leer (Ostfriesland)'	,
'8003701'	:	'Lingen (Ems)'	,
'8000238'	:	'Lüneburg'	,
'8003866'	:	'Marienhafe'	,
'8003978'	:	'Meppen'	,
'8000279'	:	'Nienburg/Weser'	,
'8004449'	:	'Norddeich'	,
'8007768'	:	'Norddeich Mole'	,
'8000800'	:	'Norden'	,
'8000291'	:	'Oldenburg (Oldb)'	,
'8000294'	:	'Osnabrück Hbf'	,
'8004751'	:	'Papenburg'	,
'8000168'	:	'Uelzen'	,
'8006076'	:	'Verden (Aller)'	,
'8006552'	:	'Wolfsburg Hbf'	,
'8000001'	:	'Aachen Hbf'	,
'8000004'	:	'Altenbeken'	,
'8000036'	:	'Bielefeld Hbf'	,
'8000041'	:	'Bochum Hbf'	,
'8000044'	:	'Bonn Hbf'	,
'8000059'	:	'Bünde (Westf)'	,
'8000080'	:	'Dortmund Hbf'	,
'8000084'	:	'Düren'	,
'8000085'	:	'Düsseldorf Hbf'	,
'8000082'	:	'Düsseldorf Flughafen'	,
'8000086'	:	'Duisburg Hbf '	,
'8001839'	:	'Erkelenz'	,
'8000098'	:	'Essen Hbf'	,
'8002206'	:	'Geilenkirchen'	,
'8000118'	:	'Gelsenkirchen Hbf'	,
'8002461'	:	'Gütersloh Hbf'	,
'8000142'	:	'Hagen Hbf'	,
'8000149'	:	'Hamm (Westf)'	,
'8000162'	:	'Herford'	,
'8002806'	:	'Herzogenrath'	,
'8000207'	:	'Köln Hbf'	,
'8003368'	:	'Köln Messe/Deutz'	,
'8003330'	:	'Köln/Bonn Flughafen'	,
'8000211'	:	'Krefeld Hbf'	,
'8000571'	:	'Lippstadt'	,
'8000252'	:	'Minden (Westf)'	,
'8000253'	:	'Mönchengladbach Hbf'	,
'8000263'	:	'Münster (Westf) Hbf'	,
'8000286'	:	'Oberhausen Hbf'	,
'8000297'	:	'Paderborn Hbf'	,
'8000307'	:	'Recklinghausen Hbf'	,
'8000316'	:	'Rheine'	,
'8000318'	:	'Rheydt Hbf'	,
'8005556'	:	'Sigeburg/Bonn'	,
'8000076'	:	'Soest'	,
'8000087'	:	'Solingen Hbf'	,
'8000192'	:	'Wanne-Eickel Hbf'	,
'8000174'	:	'Viersen'	,
'8000196'	:	'Warburg (Westf)'	,
'8000266'	:	'Wuppertal Hbf'	,
'8000331'	:	'Andernach'	,
'8000039'	:	'Bingen (Rh) Hbf'	,
'8000176'	:	'Homburg (Saar) Hbf'	,
'8000189'	:	'Kaiserslautern Hbf'	,
'8000206'	:	'Koblenz Hbf'	,
'8003515'	:	'Landstuhl'	,
'8000240'	:	'Mainz Hbf'	,
'8000667'	:	'Montabaur'	,
'8000275'	:	'Neustadt (Weinstr) Hbf'	,
'8000310'	:	'Remagen'	,
'8000323'	:	'Saarbrücken Hbf'	,
'8000257'	:	'Worms Hbf'	,
'8010022'	:	'Bad Schandau'	,
'8010085'	:	'Dresden Hbf'	,
'8010089'	:	'Dresden-Neustadt'	,
'8010205'	:	'Leipzig Hbf'	,
'8012183'	:	'Leipzig/Halle Flughafen'	,
'8010297'	:	'Riesa'	,
'8010050'	:	'Bitterfeld'	,
'8010159'	:	'Halle (Saale) Hbf'	,
'8010195'	:	'Köthen'	,
'8010222'	:	'Lutherstadt Wittenberg Hbf'	,
'8010224'	:	'Magdeburg Hbf'	,
'8010240'	:	'Naumburg (Saale) Hbf'	,
'8010334'	:	'Stendal Hbf'	,
'8010368'	:	'Weißenfels'	,
'8000058'	:	'Büchen'	,
'8002549'	:	'Hamburg Hbf'	,
'8002553'	:	'Hamburg-Altona'	,
'8002548'	:	'Hamburg Dammtor'	,
'8000147'	:	'Hamburg-Harburg'	,
'8002554'	:	'Hamburg-Bergedorf'	,
'8000199'	:	'Kiel Hbf'	,
'8000237'	:	'Lübeck Hbf'	,
'8000271'	:	'Neumünster'	,
'8010097'	:	'Eisenach'	,
'8010101'	:	'Erfurt Hbf'	,
'8010136'	:	'Gotha'	,
'8010133'	:	'Jena-Göschwitz'	,
'8011956'	:	'Jena Paradies'	,
'8010366'	:	'Weimar'	,
}

# Verbindung zur PostgreSQL-Datenbank herstellen
def connect_to_db():
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        return conn
    except psycopg2.Error as e:
        print(f"Datenbankverbindungsfehler: {e}")
        return None

# Tabelle erstellen oder aktualisieren
def create_table():
    create_table_query = """
    CREATE TABLE IF NOT EXISTS train_delays (
        id SERIAL PRIMARY KEY,
        station_name VARCHAR(100),
        train_number VARCHAR(10) NOT NULL,
        train_classification VARCHAR(20),
        planned_arrival TIMESTAMP,
        actual_arrival TIMESTAMP,
        planned_departure TIMESTAMP,
        actual_departure TIMESTAMP,
        delay_arrival_minutes INT,
        delay_departure_minutes INT
    );
    """

    conn = connect_to_db()
    if conn:
        cursor = conn.cursor()
        try:
            cursor.execute(create_table_query)
            conn.commit()
        except psycopg2.Error as e:
            print(f"Fehler beim Erstellen der Tabelle: {e}")
        finally:
            cursor.close()
            conn.close()

# Rate-Limit
def handle_rate_limit(response):
    if "x-ratelimit-remaining" in response.headers:
        header_value = response.headers["x-ratelimit-remaining"]
        try:
            # Versuche den numerischen Wert aus dem Header zu extrahieren
            match = re.search(r"(\d+)", header_value)
            if match:
                remaining = int(match.group(1))
                print(f"[DEBUG] Verbleibende API-Aufrufe: {remaining}")
                if remaining == 0:
                    print("[DEBUG] Rate-Limit erreicht, warte 60 Sekunden...")
                    time.sleep(60)  # Wartezeit basierend auf Rate-Limit
            else:
                raise ValueError("Kein gültiger numerischer Wert gefunden.")
        except ValueError:
            print(f"[DEBUG] Fehler beim Parsen von x-ratelimit-remaining: '{header_value}', automatische Verzögerung von 60 Sekunden.")
            time.sleep(60)
    else:
        print("[DEBUG] Kein x-ratelimit-remaining-Header in der API-Antwort gefunden, automatische Verzögerung von 60 Sekunden.")
        time.sleep(60)

# Daten von der API abrufen
def fetch_combined_data(station_eva, date):
    all_train_data = []
    requests_made = 0
    max_requests_per_minute = 60

    # Daten aus dem stündlichen 'plan'-Endpunkt für die letzten 8 Stunden abrufen
    current_hour = datetime.now().hour
    for hour_offset in range(-7, 1):
        hour = (current_hour + hour_offset) % 24
        hour_str = f"{hour:02}"
        url_plan = f"https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/{station_eva}/{date}/{hour_str}"
        try:
            if requests_made >= max_requests_per_minute:
                print("[DEBUG] Maximale Anfragen pro Minute erreicht. Warte 60 Sekunden...")
                time.sleep(60)
                requests_made = 0

            response = requests.get(url_plan, headers=HEADERS)
            requests_made += 1
            handle_rate_limit(response)

            if response.status_code == 200:
                xml_data = response.text
                hourly_train_data = parse_data(xml_data, station_eva)
                all_train_data.extend(hourly_train_data)
            elif response.status_code == 410:
                print(f"[WARNUNG] Keine Daten für Stunde {hour_str}, Statuscode: 410, Transaction-ID: {response.headers.get('x-global-transaction-id', 'Keine ID')}")
            else:
                transaction_id = response.headers.get("x-global-transaction-id", "Keine ID")
                print(f"API-Fehler (Plan) bei Stunde {hour_str}: {response.status_code} - {response.text}, Transaction-ID: {transaction_id}")
        except requests.RequestException as e:
            print(f"Fehler beim Abrufen der Plan-Daten für Stunde {hour_str}: {e}")

    # Daten aus dem 'fchg'-Endpunkt abrufen (Änderungsdaten)
    url_fchg = f"https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/fchg/{station_eva}"
    try:
        if requests_made >= max_requests_per_minute:
            print("[DEBUG] Maximale Anfragen pro Minute erreicht. Warte 60 Sekunden...")
            time.sleep(60)
            requests_made = 0

        response = requests.get(url_fchg, headers=HEADERS)
        requests_made += 1
        handle_rate_limit(response)

        if response.status_code == 200:
            xml_data = response.text
            fchg_train_data = parse_data(xml_data, station_eva)
            all_train_data.extend(fchg_train_data)
        else:
            transaction_id = response.headers.get("x-global-transaction-id", "Keine ID")
            print(f"API-Fehler (Fchg): {response.status_code} - {response.text}, Transaction-ID: {transaction_id}")
    except requests.RequestException as e:
        print(f"Fehler beim Abrufen der Fchg-Daten: {e}")

    return all_train_data

# Zeitkonvertierung
def convert_to_timestamp(date_str):
    try:
        return datetime.strptime(date_str, "%y%m%d%H%M")
    except (ValueError, TypeError):
        return None

# Züge klassifizieren
def classify_train(train_category):
    if train_category in ["ICE"]:
        return "ICE"
    elif train_category in ["IC", "EC"]:
        return "Intercity"
    elif train_category in ["RE", "RB", "S"]:
        return "Regional"
    else:
        return "Other"

# XML-Daten parsen
def parse_data(xml_data, station_eva):
    train_data = []
    station_name = STATIONS.get(station_eva, "Unbekannt")
    try:
        root = ET.fromstring(xml_data)

        for s in root.findall(".//s"):
            train_info = s.find(".//tl")
            if train_info is not None:
                train_number = train_info.attrib.get("n")
                train_category = train_info.attrib.get("c")
                train_classification = classify_train(train_category)

                # Filter: Nur Fernzüge (ICE und IC)
                if train_classification not in ["ICE", "Intercity"]:
                    continue

                ar = s.find(".//ar")
                dp = s.find(".//dp")

                # Debugging: Ausgabe der Knoteninhalte
                if ar is not None:
                    print(f"[DEBUG] Ankunftsknoten: {ar.attrib}")
                if dp is not None:
                    print(f"[DEBUG] Abfahrtsknoten: {dp.attrib}")

                planned_arrival = convert_to_timestamp(ar.attrib.get("pt")) if ar is not None else None
                actual_arrival = convert_to_timestamp(ar.attrib.get("ct")) if ar is not None else None

                planned_departure = convert_to_timestamp(dp.attrib.get("pt")) if dp is not None else None
                actual_departure = convert_to_timestamp(dp.attrib.get("ct")) if dp is not None else None

                # Fallback: geplante Zeit verwenden, wenn tatsächliche fehlt
                if actual_arrival is None and planned_arrival is not None:
                    print(f"[DEBUG] Kein actual_arrival für Zug {train_number}, Fallback auf planned_arrival")
                actual_arrival = actual_arrival or planned_arrival
                if actual_departure is None and planned_departure is not None:
                    print(f"[DEBUG] Kein actual_departure für Zug {train_number}, Fallback auf planned_departure")
                actual_departure = actual_departure or planned_departure

                delay_arrival_minutes = None
                delay_departure_minutes = None

                if planned_arrival and actual_arrival:
                    delay_arrival_minutes = int((actual_arrival - planned_arrival).total_seconds() // 60)

                if planned_departure and actual_departure:
                    delay_departure_minutes = int((actual_departure - planned_departure).total_seconds() // 60)

                train_data.append({
                    'station_name': station_name,
                    'train_number': train_number,
                    'train_classification': train_classification,
                    'planned_arrival': planned_arrival,
                    'actual_arrival': actual_arrival,
                    'planned_departure': planned_departure,
                    'actual_departure': actual_departure,
                    'delay_arrival_minutes': delay_arrival_minutes,
                    'delay_departure_minutes': delay_departure_minutes
                })

        return train_data
    except ET.ParseError as e:
        print(f"Fehler beim Parsen der XML-Daten: {e}")
        return []

# Daten in die PostgreSQL-Datenbank einfügen
def insert_data(train_data):
    insert_query = """
    INSERT INTO train_delays (station_name, train_number, train_classification, planned_arrival, actual_arrival, planned_departure, actual_departure, delay_arrival_minutes, delay_departure_minutes)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
    """
    conn = connect_to_db()
    if conn:
        cursor = conn.cursor()
        try:
            for data in train_data:
                cursor.execute(insert_query, (
                    data['station_name'],
                    data['train_number'],
                    data['train_classification'],
                    data['planned_arrival'],
                    data['actual_arrival'],
                    data['planned_departure'],
                    data['actual_departure'],
                    data['delay_arrival_minutes'],
                    data['delay_departure_minutes']
                ))
            conn.commit()
        except psycopg2.Error as e:
            print(f"Fehler beim Einfügen der Daten: {e}")
        finally:
            cursor.close()
            conn.close()

# Hauptprogramm
def main():
    date = (datetime.now() - timedelta(hours=8)).strftime("%y%m%d")  # Letzte 8 Stunden abfragen

    # Tabelle erstellen
    create_table()

    # Healthcheck Ping
    try:
        requests.get("https://hc-ping.com/36fadb0e-67dc-494e-82d8-dfb5248c6bfb", timeout=5)
        print("[INFO] Healthcheck erfolgreich gepingt.")
    except requests.RequestException as e:
        print(f"[WARNUNG] Healthcheck konnte nicht gepingt werden: {e}")

    # Daten für jede Station abrufen und einfügen
    for station_eva, station_name in STATIONS.items():
        print(f"[INFO] Abfrage für Station: {station_name} ({station_eva})")
        train_data = fetch_combined_data(station_eva, date)
        if train_data:
            insert_data(train_data)
            print(f"[INFO] Daten für {station_name} erfolgreich eingefügt.")
        else:
            print(f"[WARNUNG] Keine Daten für {station_name} gefunden.")

if __name__ == "__main__":
    main()

