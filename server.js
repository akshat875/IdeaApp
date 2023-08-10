const express = require("express");
const serverconfig = require('./configs/server.configs')
const mongoose = require('mongoose');
const dbconfig = require('./configs/db.config');

const app = express();



/**
 * connect to mongodb and create an admin user
 * need to have mongodb and running in your local machine
 */
mongoose.connect(dbconfig.DB_URL);
const db = mongoose.connection ;

db.on("Error", ()=>{

    console.log("Error while connecting to DB")
} )

db.once("open", ()=>{

    console.log("DB is conncted")
})


app.listen(serverconfig.PORT, ()=>{

    console.log('server started on the port number ${serverconfig.PORT}' );
}


)