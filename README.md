# My CAP Application

This is a simple SAP Cloud Application Programming (CAP) application designed to demonstrate the capabilities of the framework.

## Project Structure

- **app/index.html**: Main HTML entry point for the application.
- **db/data-model.cds**: Defines the data model using Core Data Services (CDS).
- **db/csv/sample-data.csv**: Contains sample data for testing and development.
- **srv/cat-service.cds**: Defines the service layer and endpoints.
- **srv/cat-service.js**: Implements business logic for the service.
- **package.json**: Configuration file for npm dependencies and scripts.
- **.cdsrc.json**: Configuration settings for the Continuous Delivery pipeline.
- **mta.yaml**: Defines the Multi-Target Application structure for deployment.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-cap-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the application:
   ```
   npm run build
   ```

4. Run the application locally:
   ```
   npm start
   ```

## Usage

Access the application by navigating to `http://localhost:4004` in your web browser.

## CI/CD Pipeline

This project includes a configuration for Continuous Integration and Continuous Delivery. Ensure that you have the necessary tools and access to deploy to Cloud Foundry.

## License

This project is licensed under the MIT License.