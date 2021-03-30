const path = require('path')
const express = require('express')
var PORT = 3000;
const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, "../client/dist")));

//app.set('view engine', 'html')

// app.get('/', (req, res) => {
//   res.send('../client/dist/index.html')
// })

app.listen(PORT, function(err) {
  if(err) {console.log(err)}
  else {
    console.log("Server listening on PORT", PORT)
  }
})