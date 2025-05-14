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



// endpoint for parking spot 

//endpoint for inserting the parkingspot
app.post("/parkingspot" ,async (req,res)=>{
    const {lotid , spotnumber , occupied} = req.body;
    const result = await db.query("insert into parkingspot(lot_id , spotnumber,occupied) values(?,?,?)" , [lotid,spotnumber,occupied]);
    if(result) res.send("inserted");
});


//endpoint for selecting the parkingspot

app.get("/parkingspot" , async(req,res)=>{
    const data = await db.query("select * from parkingspot");
    res.send(data[0]);
})
//endpoint for deleting 
app.delete("/parkingspot/:id" , async(req,res)=>{
    const id = req.params.id;
    const result = await db.query("delete from parkingspot where id = ?" , [id]);
    if(result) res.send("parkingspot deleted successfully");
})

app.put("/parkingspot/:id" , async(req,res)=>{
    const id = req.params.id;
    const {lotid , spotnumber , occupied} = req.body;
    const result = await db.query("update parkingspot set lot_id=?,sportnumber=? , occupied= ? where id = ?" , [lotid,spotnumber ,occupied]);
    if(result) res.send("parkingspot updated successfully")
})


//endpoints for the parkingrecord 

//endpoint for inserting the parkingrecord
app.post("/parkingspot" ,async (req,res)=>{
    const {vehicleplate , owner , vehicletype,spotid,entrytime,exittime,amount} = req.body;
    const result = await db.query("insert into parkingspot(vehicleplate , owner,vehicletype,spotid,entrytime,exittime,amount) values(?,?,?,?,?,?,?)" , [vehicleplate,owner,vehicletype ,spotid ,entrytime , exittime ,amount]);
    if(result) res.send("inserted");
});


//endpoint for selecting the parkingspot

app.get("/parkingrecord" , async(req,res)=>{
    const data = await db.query("select * from parkingrecord");
    res.send(data[0]);
})
//endpoint for deleting 
app.delete("/parkingrecord/:id" , async(req,res)=>{
    const id = req.params.id;
    const result = await db.query("delete from parkingrecord where id = ?" , [id]);
    if(result) res.send("parkingrecord deleted successfully");
})

app.put("/parkingrecord/:id" , async(req,res)=>{
    const id = req.params.id;
    const {vehicleplate , owner , vehicletype,spotid,entrytime,exittime,amount} = req.body;
    const result = await db.query("update parkingrecord set vehicleplate=?,owner=? , vehicletype= ? , spotid= ?,entrytime=?, exittime=?,amount=? , where id = ?" , [vehicleplate,owner ,vehicletype , spotid , entrytime,exittime ,amount]);
    if(result) res.send("parkingspot updated successfully")
})

//endpoints for the parkingrecord 

app.listen(5000 , ()=>console.log("your server started on port 5000"))