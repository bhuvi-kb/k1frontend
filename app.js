const express = require('express');
const path = require('path');
const cors = require('cors');


var app=express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
app.listen(3000, ()=> {
    console.log("Server running at port 3000")
});

