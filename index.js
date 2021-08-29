const express = require('express');
require('dotenv').config();
var cors = require('cors')
const app = express();
// serve up production assets
app.use(express.static('build/'));
app.use(cors());

// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
const { conditionallyUpdateScrollbar } = require('reactstrap/lib/utils');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
// if not in production use the port 5000
console.log(`port no:${process.env.PORT}`)
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);