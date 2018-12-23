import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import bodyParser from "body-parser";
import mongoose from "mongoose"
import express from "express"
import todolisteRoutes from "./routes/todolisteRoutes";
import defiRoutes from "./routes/defiRoutes";
import messageRoutes from "./routes/messageRoutes";
import groupeRoutes from "./routes/groupeRoutes";



const app = express();
const path=require('path');
const addArticle=require('./controllers/articleController');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tcdb", { useNewUrlParser: true });

app.set('view engine','pug');
app.set('views',path.join(__dirname,'./views'));



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/user',userRoutes);
app.use('/todoliste',todolisteRoutes);
app.use('/defi',defiRoutes);
app.use('/message',messageRoutes);
app.use('/groupe',groupeRoutes)

//app.use('/admin',adminRoutes);




console.log('It works !')

app.listen(4000);