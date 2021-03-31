const path = require('path')
const express = require('express')
const axios = require('axios')
var PORT = 3000;
const app = express();


app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "../client/dist")));

//makes use of any call in react to use this.
app.use(async (req, res, err) => {
  try{
    let response = await axios({
      baseURL: 'http://xivapi.com',
      method: req.method,
      url: req.url,
      data: req.body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
    }
    catch (err) {
      console.log(err)
      res.send(500);
    }
 
});

app.get('/', (req, res) => {
  res.send(200);
})
// app.get('/', (req, res) => {
//   res.send('../client/dist/index.html')
// })

app.listen(PORT, function(err) {
  if(err) {console.log(err)}
  else {
    console.log("Server listening on PORT", PORT)
  }
})