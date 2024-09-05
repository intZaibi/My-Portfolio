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
  await db.query("select * from form")
  .then((data) => {
    res.send(data)
  })
  .catch((error) => (console.log('fetching error: ', error)))
})



app.post('/chatbot', (req, res) => {

  const messages = req.body.messages.map((msg)=>{
      return " " + msg.text.trim()
    }).toString()
console.log(req.body, "\n", req.body.email, "\n", messages)
  if(req.body.email){
  db.query(
    'INSERT INTO chatbot (email, messages) VALUES (?, ?) ON DUPLICATE KEY UPDATE messages = ?', 
    [req.body.email, messages, messages]
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
    `insert into form(name, email, messages) 
    values ('${req.body.name}', '${req.body.email}', '${req.body.message}') 
    ON DUPLICATE KEY UPDATE messages = CONCAT(IFNULL(messages, ''), '\n', '${req.body.message}')`
  )
  .then(() => {
    console.log("uploaded")
    res.status(200)
  })
  .catch((error) => {
    res.status(500)
    console.log('Error uploading data',error)
  })
})




db.query("select * from form")
    .then(() => {
    console.log("db connected!!! \n");
    app.listen(process.env.port || 4000, () => console.log("server connected!!!"));
    })
    .catch((err) => console.log("conecction failed. \n" + err));
