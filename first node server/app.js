const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});


const PORT = 30001;

server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT}`);
});