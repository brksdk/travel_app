from sqlalchemy import create_engine, text
import requests
import time

# Veritabanı bağlantısı
DATABASE_URL = 'postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres'
engine = create_engine(DATABASE_URL)

def get_station_coordinates(station_name):
    """Nominatim API ile istasyon koordinatlarını çek"""
    try:
        url = f"https://nominatim.openstreetmap.org/search?q={station_name},Germany&format=json&limit=1"
        headers = {'User-Agent': 'TrainRouteApp/1.0 (wowitsberk@gmail.com)'}
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        if data:
            return float(data[0]['lat']), float(data[0]['lon'])
        return None, None
    except Exception as e:
        print(f"Error fetching coordinates for {station_name}: {e}")
        return None, None

def populate_stations():
    """sollstrecken tablosundan istasyon isimlerini al ve koordinatları kaydet"""
    with engine.connect() as conn:
        # Benzersiz istasyon isimlerini al
        query = """
        SELECT DISTINCT station_name_from FROM sollstrecken
        UNION
        SELECT DISTINCT station_name_to FROM sollstrecken
        """
        result = conn.execute(text(query))
        stations = [row[0] for row in result]

        # Her istasyon için koordinatları çek ve kaydet
        for station in stations:
            # Zaten kaydedilmiş mi kontrol et
            check_query = text("SELECT 1 FROM stations WHERE station_name = :name")
            if conn.execute(check_query, {"name": station}).fetchone():
                print(f"{station} already exists in stations table")
                continue

            lat, lon = get_station_coordinates(station)
            if lat and lon:
                insert_query = text("""
                    INSERT INTO stations (station_name, latitude, longitude)
                    VALUES (:name, :lat, :lon)
                """)
                conn.execute(insert_query, {"name": station, "lat": lat, "lon": lon})
                print(f"Saved {station}: ({lat}, {lon})")
            else:
                print(f"Could not find coordinates for {station}")
            # Nominatim'in rate limit'ine uymak için bekle
            time.sleep(1)

        conn.commit()

# Ana çalıştırma bloğunu yorum satırına al
# if __name__ == "__main__":
#     populate_stations()