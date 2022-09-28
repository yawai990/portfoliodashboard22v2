const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors=require('cors');
const PORT = 5000;
const mongoose = require('mongoose');

dotenv.config();

//bodyparser middleware);
app.use(bodyParser.json({extended:true,limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(cors())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.get('/',(req,res)=>{
    res.send('welcome to node js app')
});

app.use('/email',require('./routes/Email'));
app.use('/projects',cors(corsOptions),require('./routes/Projects'));
app.use('/languages',cors(corsOptions),require('./routes/Language'));
app.use(require('./middleware/errorHandler'))

mongoose.connect(process.env.mongoose_URL,{useNewUrlParser:true,useUnifiedTopology:true}) 
                .then(()=>app.listen(PORT,e=>
                    console.log(`server is runnig in ${PORT}`)))
                .catch(err=>console.log(err));

