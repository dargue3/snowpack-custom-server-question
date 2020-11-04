const path = require('path');
const express = require('express');

/**
 * The purpose of this tiny Express app is to host meego-express for our dev environment.
 * Normally you can accomplish this with CRA's proxy server but we're running Snowpack now
 */

const app = express();

const THIS_PORT = 3000;

app.use(express.static(path.join(__dirname, './build')));

app.get(/^[^.]*$/, function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen({ port: THIS_PORT });
