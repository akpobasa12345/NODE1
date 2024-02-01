import  Express  from "express";
import hotel from "./BACKEND/data/osunData.js";
import lag from "./BACKEND/data/lagosData.js"
import cors from 'cors';
import cookieParser from "cookie-parser";




const app = Express();
app.get("/osunData",(req, res) => {
  res.send({
   data : hotel
  })
})
app.get("/lagData",(req, res) => {

})
app.use(
  cors({
    origin: "*",
    credentials : true
  })
)

app.use(Express.json())
app.post((req, res) =>{
  console.log(req)
})
app.post(
  "/register",
  (req, res, next) => {
    // console.log(req);

    const { name, city, state, country } = req.body;

    if (name == "" || city == "" || state == "" || country == "") {
    return  res.send("Invalid request");
    }

    next();
  },

  (req, res) => {
    const { name, city, state, country } = req.body;
    res.send({ name, city, state });
  }
);

app.listen(8080, () => {
  console.log("work")
})


