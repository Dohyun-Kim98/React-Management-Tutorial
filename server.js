const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/api/hello',(req,res)=>{
    res.send({message:'Hello Express!'});
});
app.listen(port,()=>console.log(`Listening on port ${port}`));
