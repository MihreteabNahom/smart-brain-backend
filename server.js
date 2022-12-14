const express = require ('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
        client: 'pg',
        connection: {
        host : '127.0.0.1',  
        port : 5432,
        user : 'postgres',
        password : '1234',
        database : 'smart-brain'
    }
  });

  //getting data from the database
  db.select('*').from('users')
  

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send(database.users);
})

app.post('/signin',(req,res) => {
    signin.handleSignin(req, res, db, bcrypt)
 })

app.post('/register', (req,res) => {
    register.handleRegister(req, res, db, bcrypt)
 })

app.get('/profile/:id', (req,res) => {
    profile.handleProfileGet(req, res, db)
 })

app.put('/image', (req, res) => {
    image.handleImage(req, res, db)
})

// app.post('/imageurl', (req, res) => {
//     image.handleApiCall(req, res)
// })

 app.listen(3000, () => {
    console.log('app is running')
 })



      // app.models
      // .predict(
      //   Clarifai.FACE_DETECT_MODEL,
      //   this.state.input)
      //   .then (response =>{
      //     fetch('http://localhost:3000/image', {
      //       method: 'put',
      //       headers: {'Content-Type': 'application/json' },
      //       body: JSON  .stringify({
      //         id: this.state.user.id
      //       })
      //     })
      //     .then(response => response.json())
      //     .then(count => {
      //       this.setState({user:{
      //         entries: count
      //       }})
      //     })
      //   }
        