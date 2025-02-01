const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === '/home'){
    res.write('<h1>Welcome to the Home Page</h1>');
    return res.end();
  } else if (req.url === '/men'){
    res.write('<h1>Welcome to the Men page </h1>');
    return res.end();
  }else if (req.url === '/women'){
    res.write('<h1>Welcome to the Women page </h1>');
    return res.end();
  }else if (req.url === '/kids'){
    res.write('<h1>Welcome to the Kids page </h1>');
    return res.end();
  }else if (req.url === '/cart'){
    res.write('<h1>Welcome to the Cart page </h1>');
    return res.end();
  }

  res.write(`
   <html lang="en">
<head>
  
  <title>On the Shop</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
  
</body>
</html>
    
    `);
    res.end();

  

});



server.listen(30002, () => {
  console.log('Server running on address http://localhost:30002');
});