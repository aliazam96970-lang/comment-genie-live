cost express=require("express");
cost core =require("cors");
require("dotenv").config();

cost app =express();
app.use (cors());
app.use(express.json());

const PORT=process.env.PORT ||3000;

  app.get("/",(red,res)=> {
    res.send(Backend is running successfully");
  });

app listen(PORT, ()=> {
  console.log('Server running on port ${PORT}');
    
