const express = require("express");
const app = express();

app.set("view engine", "ejs");


// routes

app.use("/product/:id", function(req, res) {
    //res.send("ürün details " + req.params.id);
    res.render("urun-details");
});


app.use("/products", function(req, res) {
    //res.send("ürünler");
    res.render("urunler");
});

app.use("/", function(req, res) {
    // res.send("ana sayfa");
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});