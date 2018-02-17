const express = require ('express');
const port = 3000;
const bodyparser = require('body-parser');
const app = express();



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
