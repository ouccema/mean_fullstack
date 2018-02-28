const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const EjsRender = require('ejs');
var jwt = require('jsonwebtoken');


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
  response.message = typeof err == 'object' ? err.message : err;
  response.data='';
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

      response.message = 'OK';
      response.data = result;
      res.json(response);

    }).catch(err => {
      sendError(err, res, 409)

    })

  })

})

router.post('/login',(req,res)=>{

  connection(db => {
    db.collection('users').findOne({email:req.body.email}).then(result => {
console.log(req.body);
        if(!result) sendError ('User not found',res,401);

      if (result.password == req.body.password) {

        let token = jwt.sign({id:result._id}, 'secret');

       response.data ={token:token};
       response.status=200;
       response.message='Logged In';
        res.json(response);
      }

      else {
        sendError('Login Invalid',res,401);

      }

    }).catch(err => {
      sendError(err, res, 500)

    })

  })

})


module.exports = router;
