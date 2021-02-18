const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter the message</title> </head>");
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" >SEND</button></form></body>'
        );
        res.write("</html>");
        return res.end();
    }
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My page</title> </head>");
    res.write("<body><h1>Hello World!!!</h1></body>");
    res.write("</html>");
    res.end();
});
server.listen(3000);