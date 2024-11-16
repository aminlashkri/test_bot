const sql = require("mysql")

const dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"bot_cafe"
}

const db = sql.createConnection(dbConfig)


db.connect((err)=>{
    if(err){
        console.log(`db is eror${err.stack}`);
        
    }else{
        console.log("sql is conect");
        
    }

})


module.exports = db