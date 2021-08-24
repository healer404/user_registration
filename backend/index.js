const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserSchema = require("./models/user_info");

mongoose.connect('mongodb://localhost:27017/user-info', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("MongoDB database is now connected");
});

const port =  4000;

const app = express();

app.use(cors());
app.use(express.json());

// Get all the user information from the database
app.get("/", (req, res) => {
    UserSchema.find((error, result) => {
        if(error){
            console.log(error);
        }else{
            res.json(result);
        }
    });
});

// Save the information of the new user
app.post("/register", (req, res) => {
   const newUser = new UserSchema(req.body);
   newUser.save().then((newUser) => {
       res.json(newUser);
   }).catch((err) => {
       res.status(500).send(err.message);
   });
});

// Get the specific id of the selected user
app.get("/:id", (req, res) => {
   const userID = req.params.id;
   UserSchema.findById(userID, (err, data) => {
        res.json(data);
   });
});

// Updating the data on the database specifically by the id
app.post("/:id", (req, res) => {
    const userID = req.params.id;
    UserSchema.findById(userID, (err, data) => {

        if(!data){
            res.status(404).send("Data not Found");
        } else {
            data.fname = req.body.fname;
            data.lname = req.body.lname;
            data.mname = req.body.mname;
            data.age = req.body.age;
            data.sex = req.body.sex;
            data.email = req.body.email;

            data.save().then((data) => {
                res.json(data);
            }).catch(err => res.status(500).send(err.message));
        }
    });
});

app.listen(port, () => {
    console.log("Server is now running on port " + port);
});