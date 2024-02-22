// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route that returns HTML
app.get('/', (req, res) => {
    // HTML content to be returned
    const htmlContent = `
Testing Auth
    `;

    // Set Content-Type header to indicate HTML content
    res.setHeader('Content-Type', 'text/html');

    // Send the HTML content as the response
    res.send(htmlContent);
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
