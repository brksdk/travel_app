## Planning & Data Basis

At the start of the project, we analyzed which data would be necessary to generate reliable predictions for train delays.
The focus was specifically on the timetable data for individual trains and stations. A crucial requirement was that both the scheduled and actual arrival and departure times had to be available in order to calculate precise delay values.

This information was retrieved via the official DB Timetables API and stored in a structured format.

To access the API, a developer account is required. After registration, Deutsche Bahn provides an API Client ID and an API Key, which must be included in the header of each request.

## Database Decision

In this project, we work with structured, relational data (e.g., trains, stations, delays), which is why we chose to use a SQL database.
PostgreSQL was selected as it is particularly well-suited for complex queries and relationships.
PSQL can be set up locally or remotely.
In our project, we chose a remote database that all team members could access.
To achieve this, we used a free PostgreSQL instance provided by Google Cloud, which we were able to use for the duration of the project.

## Selection and Identification of Stations

To make API requests, EVA numbers (unique station codes) are required to identify the stations.
Since Deutsche Bahn does not offer an official, freely accessible list of EVA numbers, we had to compile this information from various online sources.

Our goal was to focus on long-distance stations (IC/ICE). To do so, we created a list of these stations and attempted to find the corresponding EVA numbers. In some cases, this was only partially possible due to conflicting or missing data, resulting in certain stations being excluded from queries.

## Data Retrieval and Population

The script Verspätungsdaten.py was executed four times a day at 0, 6, 12, and 18 o'clock, retrieving data for the past 8 hours for a given station during each run.
It was not possible to reliably request data further into the past. A 2-hour overlap was implemented because final updates for the most recent 2 hours of a query were often not yet available.

The data retrieval script was scheduled via a cron job on Google Cloud to run at the mentioned times.
To detect failures promptly, a ping to Healthcheck.io was implemented. This allowed us to receive a notification if the script failed and take appropriate action.

The retrieved data was stored in a central table called train_delays.
This table includes the following fields, among others:

Station
Train number and type
Scheduled and actual arrival/departure times
Calculated delay (in minutes)
This table serves as the foundation for all subsequent analyses and aggregations.


## Timetable data

Since we did not have access to official timetable data from Deutsche Bahn, we first identified all connections in our database that had been operated at least ten times.
Based on this, we created a list and developed a scraper **fahrplan_scraper.py** to extract timetable information from a third-party website. This included data on intermediate stops as well as the corresponding arrival and departure times.

For the majority of connections, the timetable data could be successfully extracted. However, some entries contained incomplete information (e.g., missing stops or times), and were therefore excluded from further processing.

Based on this data, we were able to reconstruct various route segments, stops along a connection, and other relevant details.

In the long term, it would be advisable to rely on official timetable data from Deutsche Bahn for long-distance services.


## Data extracts

The following link takes you to the original extracts of the tables from the database:
https://drive.google.com/drive/u/1/folders/1msFAo1_SXCfILdUOnYKTqbWCdIBevCt_

#Responsible
Tien Bui Tu


