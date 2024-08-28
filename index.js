const express = require("express");
const app = express();

app.set("view engine", "ejs");


const daya = [
    {id: 1, name: "iph 15", price: 30000 },
    {id: 2, name: "iph 14", price: 40000 },
    {id: 3, name: "iph 13", price: 50000 },
    
];

// routes

app.use("/product/:id", function(req, res) {
    //res.send("ürün details " + req.params.id);
    res.render("product-details");
});


app.use("/products", function(req, res) {
    //res.send("ürünler");
    res.render("products", data);
});

app.use("/", function(req, res) {
    // res.send("ana sayfa");
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});




