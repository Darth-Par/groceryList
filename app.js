// Required packages.
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

// App and port declarations.  Instance of express and port.
const app = express();
const port = 8000

// Middleware.
app.use(morgan('combined'));

// GET route '/'.
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Server running...
app.listen(port, () => {
    debug(`Server listening on port ${chalk.blue(port)}!`);
});