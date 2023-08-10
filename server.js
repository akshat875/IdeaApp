const express = require("express");
const serverconfig = require('./configs/server.configs')


const app = express();


app.listen(serverconfig.PORT, ()=>{

    console.log('server started on the port number ${serverconfig.PORT}' );
}


)