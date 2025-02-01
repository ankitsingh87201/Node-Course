const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('<form action="/submit-details"  method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="male" id="male"');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" value="female" id="female"');
    res.write('<br> <br> <input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } 
    else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
      fs.writeFileSync('user.txt', 'ankit singh');
      res.statusCode = 302;
      res.setHeader('Location', '/');
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>node.js</title></head>');
    res.write('<body><h1>welcome  of users</h1></body>');
    res.write('</html>');
    return res.end();
  
});


const PORT = 30001;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
});