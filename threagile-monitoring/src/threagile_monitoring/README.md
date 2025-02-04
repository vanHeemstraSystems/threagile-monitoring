# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Dashboard Functionality

The Dashboard provides a comprehensive view of your Threagile analysis results and monitoring data. Here are the key features:

### Risk Overview

- Displays a summary of identified risks categorized by severity levels
- Interactive charts showing risk distribution across different technical assets
- Trend analysis of risk metrics over time

### Technical Assets Monitoring

- Real-time monitoring of technical assets defined in your Threagile model
- Status indicators for each asset's health and compliance
- Detailed view of asset properties and relationships

### Compliance Tracking

- Monitors compliance with defined security requirements
- Tracks mitigation status for identified risks
- Progress indicators for implemented security controls

### Data Visualization

- Interactive graphs and charts for risk analysis
- Heat maps showing risk concentration areas
- Custom filtering and sorting options for better data insight

### Reports and Exports

- Generate detailed PDF reports of risk assessments
- Export data in various formats (CSV, JSON)
- Scheduled report generation capabilities

### Testing

#### Test Setup

Before running tests, ensure you have the required dependencies:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest babel-jest @babel/preset-react @babel/preset-env identity-obj-proxy jest-environment-jsdom
```

Create a `.babelrc` file in your project root:
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
}
```

#### Running Tests

To run the test suite:
```bash
npm test
```

This will launch Jest in watch mode, allowing you to:
- Run all tests (`a`)
- Run only failed tests (`f`)
- Run tests related to changed files (`o`)
- Run a specific test file (`p` then type the file name)

#### Dashboard Component Tests

The Dashboard component has specific tests in `components/Dashboard.test.js`. These tests verify:

1. Critical Risks calculation:
   - Displays correct number of critical risks
   - Handles multiple critical risks
   - Handles scenarios with no critical risks

2. Component rendering:
   - Proper loading states
   - Correct display of all chart sections
   - Interactive controls functionality

To run only Dashboard tests:

```bash
npm test Dashboard
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


