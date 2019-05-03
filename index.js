let express = require('express');
let bodyParser = require('body-parser');
let config = require('config');

let app = express();

let host = process.env.HOST || config.get("HOST");
let port = process.env.PORT || config.get("PORT");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

let router = require('./router/todos');
app.use('/todos',router);

app.listen(port,host,function(err){
    if(!err)	console.log(`Your port is ${port}, ${host}`);
    else	console.log(err);

});