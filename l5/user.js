const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

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
      const body = [];
      req.on('data', chunk =>{
        console.log(chunk);
        body.push(chunk);
        
      });

      req.on('end', () =>{
        const fullBody =Buffer.concat(body).toString();
        console.log(fullBody);

        const params = new URLSearchParams(fullBody);
        // const bodyObject = {};
        // for (const [key, val] of params.entries()) {
        //   bodyObject[key] = val;
        // }
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        
        
      })


      
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