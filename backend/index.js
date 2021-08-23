const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserSchema = require("./models/user_info");

mongoose.connect('mongodb://localhost:27017/user_info', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.once("open", () => {
    console.log("MongoDB database is now connected");
});

const port =  6009;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    UserSchema.find((error, result) => {
        if(error){
            console.log(error);
        }else{
            res.json(result);
        }
    });
});

app.post("/register", (req, res) => {
   const newUser = new UserSchema(req.body);
   newUser.save().then((newUser) => {
       res.json(newUser);
   }).catch(err => {
       res.status(500).send(err.message);
   });
});

app.get("/:id", (req, res) => {
   const userID = req.params.id;
   UserSchema.findById(userID, (err, data) => {
        res.json(data);
   });
});

app.listen(port, () => {
    console.log("Server is now running on port " + port);
});