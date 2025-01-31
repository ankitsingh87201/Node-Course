const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>welcome to my home page</h1></body>');

      
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




  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>node.js</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});


const PORT = 30001;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
});