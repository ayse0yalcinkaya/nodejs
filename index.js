var http = require("http");
var fs = require("fs");


var server = http.createServer((req, res) => {
    
    if(req.url == '/') {
        fs.readFile("index.html", (err, html) => {
            res.write(html); //gelen içerik
            res.end();

        });
        

    } else if(req.url == '/products') {
        fs.readFile("urunler.html", (err, html) => {
            res.write(html);
            res.end();

          
        })
        

    } else {
        fs.readFile("404.html", (err, html) => {
            res.write(html);
            res.end(); //response'ı end etmen gerekir geleni görmen için

          
        })
        
    }
    
});


server.listen(3000, () => {
    console.log("node.js server at port 3000");
});