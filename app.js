const express = require("express");
const app = express();
const port = 3000;
const path =  require("path")
bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"./public")));



app.get("/", async (req, res) => {
    res
    .status(200)
    .sendFile(path.join(__dirname,"./public/","index.html"));

})

app.post("/get", (req,res)=>{
  res.send((req.body.location));
  console.log(req.body)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));