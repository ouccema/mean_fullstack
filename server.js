const express = require ('express');
const port = 3000;
const bodyparser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const api = require('./server/routing/api');
app.use('/api',api);


app.use(express.static(__dirname+"/dist"));

app.use('*',(req,res)=>{
  res.sendFile(__dirname+'/dist/index.html')
})
app.listen(port,err=>{


if (err) throw err;
console.log(`the server is running on port ${port}`);

})
