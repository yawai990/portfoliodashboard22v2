const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors=require('cors');
const PORT =process.env.PORT || 5000;
const mongoose = require('mongoose');

dotenv.config();

//bodyparser middleware);
app.use(bodyParser.json({extended:true,limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(cors())

app.get('/',(req,res)=>{
    res.send('welcome to portfolio dashboard app')
});

app.use('/user',require('./routes/Auth'));
app.use('/email',require('./routes/Email'));
app.use('/projects',require('./routes/Projects'));
app.use('/languages',require('./routes/Language'));
app.use('/image',require('./routes/Image'));
app.use('/experiences',require('./routes/exp'));
app.use('/contactlist',require('./routes/Contact'))
app.use(require('./middleware/errorHandler'))

mongoose.connect(process.env.mongoose_URL,{useNewUrlParser:true,useUnifiedTopology:true}) 
                .then(()=>app.listen(PORT,e=>
                    console.log(`server is runnig in ${PORT}`)))
                .catch(err=>console.log(err));

