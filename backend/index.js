//importing the required modules
const express = require("express")
const cors = require("cors");



//instatiating the express on the app variable
const app = express();

//middlewares 
app.use(cors()); //cross origin resource sharing 
app.use(express.json()); // json decoding middleware


//apps functionalities

const db = require("./db");

//endpoint for inserting the parkinglot
app.post("/parkinglot" ,async (req,res)=>{
    const {name , location} = req.body;
    const result = await db.query("insert into parkinglot(name,location) values(?,?)" , [name,location]);
    if(result) res.send("inserted");
})

//select endpoint
app.get("/parkinglot" , async(req,res)=>{
    const data = await db.query("select * from parkinglot");
    res.send(data[0]);
})
//delelte endpoint
app.delete("/parkinglot/:id" , async(req,res)=>{
    const id = req.params.id;
    const result = await db.query("delete from parkinglot where id = ?" , [id]);
    if(result) res.send("parking lot deleted successfully");
})


app.put("/parkinglot/:id" , async(req,res)=>{
    const id = req.params.id;
    const {name,location} = req.body;
    
    const result = await db.query("update parkinglot set name=?,location=? where id = ?" , [name,location ,id]);

    if(result) res.send("parkinglot updated successfully")
})






app.listen(5000 , ()=>console.log("your server started on port 5000"))