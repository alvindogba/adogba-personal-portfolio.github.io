const express = require("express");
const path = require ("path");


//Creating my express Server
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname + "public")));

//Creating my First Get Route
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public",  "index.html" ));
    
})

//Creating my work Route
// app.get("/work", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public",  "work.html"));
// });

// //Creating my About Route
// app.get("/about", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public",  "about.html"));
// });

// //Creating my Contact Route
// app.get("/contact", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public",  "contact.html"));
// });

app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`)
})
