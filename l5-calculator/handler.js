const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) =>{
  console.log(req.url, req.method);
  
  if (req.url === '/' ){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Practise set</title></head>
      <body>
      <h1>welcome to Calculator</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      <html>
      `)
      return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator") {

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Practise set</title></head>
      <body>
      <h1>Here is the Calculator</h1>
      <form action="/result" method="POST">
      <input type="text" name="first" placeholder="Enter first number" />
      <input type="text" name="second" placeholder="Enter second number" />
      <input type="submit" value="Sum" />
      </form>
       
      </body>
      <html>
      `)
      return res.end();

  }
  else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>Practise set</title></head>
    <body>
    <h1>404 Page Does not Exist</h1>
    <a href="/">Go to Home page</a>
    </body>
    <html>
    `)
    return res.end();

}

exports.requestHandler = requestHandler;