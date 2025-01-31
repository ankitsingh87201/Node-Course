const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form>');
    res.write('<input type="text" name="username" placeholder="Enter your name">');



    res.write('</form>');







      res.write('</body>');

      
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/users'){
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>welcome  of users</h1></body>');
    
    res.write('</html>');
    return res.end();
  }




 
});


const PORT = 30001;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
});