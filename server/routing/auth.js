const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const EjsRender = require('ejs');


const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/App1Db', (err, client) => {

    if (err) return console.log(err);
    let db = client.db('App1Db');
    closure(db);

  })
}

//Error handling

const sendError = (err, res, code) => {

  response.status = code;
  response.messsage = typeof err == 'object' ? err.message : err;
  res.status(code).json(response);

}
//Response handling

let response = {
  status: 200,
  data: [],
  message: null
};


router.post('/register',(req,res)=>{

  connection(db => {
    db.collection('users').insert(req.body).then(result => {

      response.mesage = 'OK';
      response.data = result;
      res.json(response);

    }).catch(err => {
      sendError(err, res, 501)

    })

  })

})


module.exports = router;
