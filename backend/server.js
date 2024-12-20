const express=require("express");
const mysql=require("mysql");
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"product_config"
})
app.post('/login',(req,res)=>{
    const sql="SELECT * FROM login where `email`= ? AND `password`= ?";

    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json("Error")
        }
        if(data.length >0 ){
            return res.json("Success");
        }
        else{
            return res.json("failed")
        }
    })
}
)

app.listen(8081,()=>{
    console.log("Server running on 8081");
})