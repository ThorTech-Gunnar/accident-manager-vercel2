# Local Deployment and Testing Instructions

This guide will help you set up and run the Incident Management SaaS application locally for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm (v6 or later)
- Git
- MongoDB (v4.4 or later)

## Step 1: Clone the Repository

1. Open a terminal or command prompt.
2. Clone the repository:
   ```
   git clone https://github.com/your-repo/incident-management-saas.git
   cd incident-management-saas
   ```

## Step 2: Install Dependencies

1. Install the project dependencies:
   ```
   npm install
   ```

## Step 3: Set Up Environment Variables

1. Create a `.env` file in the project root directory.
2. Copy the contents of `.env.example` into `.env`.
3. Update the values in `.env` with your local configuration:
   ```
   MONGODB_URI=mongodb://localhost:27017/incident_management
   JWT_SECRET=your_jwt_secret
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   OPENAI_API_KEY=your_openai_api_key
   ```

## Step 4: Set Up the Database

1. Ensure MongoDB is running on your local machine.
2. The application will automatically create the necessary collections when it first connects to the database.

## Step 5: Run the Application

1. Start the development server:
   ```
   npm run dev
   ```
2. The application should now be running on `http://localhost:3000`.

## Step 6: Create a Super Admin Account

1. Run the super admin creation script:
   ```
   npm run create-super-admin
   ```
2. Follow the prompts to set up the super admin email and password.

## Step 7: Testing

### Running Unit Tests

1. Execute the test suite:
   ```
   npm test
   ```

### Manual Testing

1. Open a web browser and navigate to `http://localhost:3000`.
2. Log in using the super admin credentials you created.
3. Test various features of the application, including:
   - Creating and managing cases
   - User management
   - File and video uploads
   - Generating reports
   - Floor plan integration
   - Multi-franchise functionality (if applicable)

## Step 8: Building for Production

If you want to create a production build:

1. Run the build command:
   ```
   npm run build
   ```
2. The production-ready files will be generated in the `dist` directory.

## Troubleshooting

- If you encounter any issues with dependencies, try deleting the `node_modules` folder and running `npm install` again.
- Ensure all required environment variables are correctly set in your `.env` file.
- Check the console output for any error messages that may indicate configuration issues.

## Additional Notes

- For local development, the application uses a self-signed HTTPS certificate. You may need to accept this certificate in your browser.
- Some features, like email notifications or third-party integrations, may require additional configuration for full functionality in a local environment.

If you encounter any problems or have questions about local deployment and testing, please refer to the project documentation or reach out to the development team for assistance.