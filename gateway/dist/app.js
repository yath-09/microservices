"use strict";
const express = require('express');
const expressProxy = require('express-http-proxy');
const app = express();
app.use('/user', expressProxy('http://localhost:3001'));
app.listen(3000, () => {
    console.log('Gatway service started at port 3000');
});