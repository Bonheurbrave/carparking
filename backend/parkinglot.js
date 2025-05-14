const route = require("express").Router();
const db = require("./db");

//endpoint for inserting the parkinglot
route.post("/parkinglot" ,async (req,res)=>{
    const {name , location} = req.body;
    const result = await db.query("insert into parkinglot(name,location) values(?,?)" , [name,location]);
    if(result) res.send("inserted");
})

//select endpoint
route.get("/parkinglot" , async(req,res)=>{
    const data = await db.query("select * from parkinglot");
    res.send(data[0]);
})
//delelte endpoint
route.delete("/parkinglot/:id" , async(req,res)=>{
    const id = req.params.id;
    const result = await db.query("delete from parkinglot where id = ?" , [id]);
    if(result) res.send("parking lot deleted successfully");
})


route.put("/parkinglot/:id" , async(req,res)=>{
    const id = req.params.id;
    const {name,location} = req.body;
    
    const result = await db.query("update parkinglot set name=?,location=? where id = ?" , [name,location ,id]);

    if(result) res.send("parkinglot updated successfully")
})


module.exports = route;