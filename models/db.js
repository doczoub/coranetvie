const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CORANETVIEDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if (err) {
        console.log("database connected")
    }else{
        console.log("erreur"+err);
    }
}

)