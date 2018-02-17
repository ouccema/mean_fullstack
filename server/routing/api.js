const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const EjsRender = require('ejs');


const connection = (closure)=>{
return MongoClient.connect('mongodb://localhost:27017/App1Db',(err,client)=>{

    if (err) return console.log(err);
    let db = client.db('App1Db');
    closure(db);

})
}

//Error handling

const sendError=(err,res,code)=>{

response.status = code;
response.messsage = typeof err =='object' ? err.message : err;
res.status(code).json(response);

}
//Response handling

let response = {
status :200,
data:[],
message:null
};

router.get('/:id/todos',(req,res)=>{

    let query = {_id:ObjectID(req.params.id)};

    connection(db=>{
db.collection('pool').findOne(query).then(result=>{

    response.data = result.todos;
    response.mesage='OK';
    res.json(response);

}).catch(err=>{
if (err) throw err;
res.send(err);
})

    })


})


router.get('/:id/todos/:iTodo',(req,res)=>{

    let query = {_id:ObjectID(req.params.id)};

    connection(db=>{
db.collection('pool').findOne(query).then(result=>{

    response.data = result.todos[req.params.iTodo];
    response.mesage='OK';
    res.json(response);

}).catch(err=>{
  sendError(err, res,501)

})

    })


})

module.exports = router;


