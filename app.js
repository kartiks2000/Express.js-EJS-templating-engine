// Setting Templating Engine i.e 'EJS' in this case


const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');


const userprops = require('./routes/user');
const backprops = require('./routes/back');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

// Registering Templating Engine i.e 'ejs' in this case
app.set('view engine', 'ejs');

// We need to specify this for the location of views and this could also to written for other templating engine
app.set('views','views');


app.use(userprops.router);
app.use(backprops.router);



app.listen(3000);