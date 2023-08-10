const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

name :{

    type : String,
    required : true

},

userID :{

    type : String,
    required : true,
    unique : true 
},

pasword :{

    type : String,
    required : true,
    unique : true
},

email :{

    type: String,
    required : true,
    unique : true,
    minlength : 10,
    lowercase : true
},

userType :{

    type: String,
    required : true,
    default : "CUSTOMER",
    enum : [ "CUSTOMER" , "ADMIN"]
}

}, {timestamps :true});

module.exports = mongoose.model("user", userSchema);
