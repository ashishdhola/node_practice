const http = require('http');
const fs = require('fs');

const port = 1234;
const requrestHandler = (req, res)=>{
    // console.log(req.url);
    let filePath = "";
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/contact':
            filePath = './Contact.html'
            break;
        case '/about':
            filePath = './about.html'
            break;
        case '/product':
            filePath = './product.html'
            break;
        default:
            filePath = './error.html'
            break;
    }
    let data = fs.readFileSync(filePath);
    res.end(data);
}
const server = http.createServer(requrestHandler);     // create a new server

server.listen(port, (err)=>{
    if(err){
        console.log(`Server is not start: ${err}` );
        return false;
    }
    console.log(`Server start at http://localhost:${port}`);
});