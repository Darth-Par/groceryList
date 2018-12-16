// Required packages.
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// App and port declarations.  Instance of express and port.
const app = express();
const port = 8000

// Middleware.
app.use(morgan('combined'));
// Assets served from public folder.
app.use(express.static(path.join(__dirname, '/public/')));
// Bootstrap, jQuery, Popper.js served from node_modules
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/popper.js/dist')));

// GET route '/'.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Server running...
app.listen(port, () => {
    debug(`Server listening on port ${chalk.blue(port)}!`);
});