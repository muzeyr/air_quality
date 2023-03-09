# Air Quality API
This project is an implementation of a REST API that fetches air quality data using the IQAir API. The project was completed as part of an assignment that required implementing a Node.js-based REST API to fetch air quality data using the IQAir API and store it in a database.

## Configuration
To set up the project, an API key was obtained from IQAir, and the "nearest_city" endpoint was tested using Postman. Once the endpoint was working correctly, a Node.js REST API was built to fetch air quality data using the endpoint.

## Integration
The REST API was implemented using Nest.js, and an endpoint was created to fetch air quality data based on the user's longitude and latitude. A CRON job was set up to check air quality for the Paris zone every minute and save the results in the database.

## Database
The data was stored in a MongoDB database using Mongoose, and the data was saved with a timestamp to track when the air quality data was collected.

## Testing
Unit tests were implemented to test the functionality of the REST API, and integration tests were run to test the entire application.


## CRON Job
A CRON job was implemented using Nest.js to fetch air quality data for the Paris zone (latitude: 48.856613, longitude: 2.352222) every 2 minutes. The CRON job was scheduled using the @nestjs/schedule package, and the data was saved to a MongoDB database using Mongoose. The data was stored with a timestamp to track when the air quality data was collected.

To test the CRON job, integration tests were implemented to ensure that the job was running correctly and that the data was being saved to the database at the correct intervals. The tests were run automatically using Jest, and the results were recorded in the test reports.
##  Extensibility :rocket:
This project has been designed with extensibility in mind. It uses modular design patterns, and the code is well-organized and easy to understand.

🧩 New endpoints can be added easily by creating new controllers and routes.

🔗 Additional APIs can be integrated by creating new services that use the existing infrastructure.

📦 New functionality can be added by installing new packages and modules.

🤝 The project is open-source, and contributions are welcome from anyone who wants to help improve the code.

🚀 With the help of the community, this project can continue to evolve and become even more powerful over time.
