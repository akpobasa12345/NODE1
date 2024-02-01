import http from "http";

http.createServer((req, res) => {
  res.setHeader(200,{'content-type': 'text/html'})

  res.write('<html>')
  res.write('<h1>HELLO NODE</h1>')
  res.write('<h1>HELLO NODE</h1>')
  res.write('<html/>')
  console.log('server running')
  
  res.end();
}).listen(3000);