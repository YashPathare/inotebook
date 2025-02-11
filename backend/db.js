const mongoose = require('mongoose');
const mongURI =  'mongodb://localhost:27017/inotebook'

const connectToMongo=()=>
{
    mongoose.connect(mongURI).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}

module.exports=connectToMongo;