import express from 'express'
const app = express();
import cors from 'cors'
import db from './db.js'

app.use(express.json()); //for JSON data
app.use(express.urlencoded({ extended: true })); // for XML data
app.use(cors()); 

app.use((req, res, next) => {
    console.log("Request Received");
    next();
});





app.get('/', async (req, res) => {
  await db.query("select * from contactForm")
  .then((data) => {
    res.send(data)
  })
  .catch((error) => (console.log('fetching error: ', error)))
})



app.post('/chatbot', (req, res) => {

  const messages = req.body.messages.map((msg)=>{
      return " " + msg.text.trim()
    }).toString()

  if(req.body.email){
  db.query(
    'INSERT INTO chatbot (email, JSON_messages, messages) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE JSON_messages = ?, messages = ?', 
    [req.body.email, JSON.stringify(req.body.messages), messages, JSON.stringify(req.body.messages), messages]
    )
    .then(() => {
      console.log("uploaded")
      res.status(200)
    })
    .catch((error) => {
      res.status(500)
      console.log('Error uploading data',error)
    })
  } else {
    console.log("No email.Not uploaded")
    res.status(200)
  }

})


app.post('/contact', (req, res) => {
  console.log(req.body)
  db.query(
    `insert into contactForm(name, email, message) values ('${req.body.name}', '${req.body.email}', '${req.body.message}')`
  )
  .then(() => {
    console.log("uploaded")
    res.send('uploaded successfully').status(200)
  })
  .catch((error) => {
    res.status(500).send('Error uploading', error)
    console.log('Error uploading data',error)
  })
})




db.query("select * from contactForm")
    .then(() => {
    console.log("db connected!!! \n");
    app.listen(4000, () => console.log("server connected!!!"));
    })
    .catch((err) => console.log("conecction failed. \n" + err));
