const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// '/' route to handle form submission
app.post('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Submitted Data</h1>
                <pre>${JSON.stringify(req.body, null, 2)}</pre>
            </body>
        </html>
    `);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});