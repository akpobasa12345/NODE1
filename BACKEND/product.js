import  express  from "express";
import hotel from "./data/osunData.js";
import lag from "./data/lagosData.js"
import cors from 'cors';
import cookieParser from "cookie-parser";
import ibadan from "./data/ibadanData.js";
import asaba from "./data/asabaData.js";
import abj from "./data/abujaData.js";




const app = express();
app.get("/osunData",(req, res) => {
  res.send({
   data : hotel
  })
});

app.get("/lagData",(req, res) => {
  res.send({
    data : lag
   })
})


app.use(
  cors({
    origin: "*",
    credentials : true
  })
)

// app.use(express.json())
// app.post((req, res) =>{
//   console.log(req)
// })
// app.post(
//   "/register",
//   (req, res, next) => {
//     // console.log(req);

//     const { name, city, state, country } = req.body;

//     if (name == "" || city == "" || state == "" || country == "") {
//     return  res.send("Invalid request");
//     }

//     next();
//   },

//   (req, res) => {
//     const { name, city, state, country } = req.body;
//     res.send({ name, city, state });
//   }
// );

app.listen(8080, () => {
  console.log("work")
})


