const http = require('http');





const server = http.createServer((req, res) => {

  const url=req.url

if(url=='/home')

{

res.write('<html>')

res.write('<head><title></title></head>')

res.write('<body><h1>Welcome home</h1></body>')

res.write('</html>');

return res.end();



}

if(url=='/about')

{

res.write('<html>')

res.write('<head><title></title></head>')

res.write('<body><h1>Welcome to about us page</h1></body>')

res.write('</html>');

return res.end();



}

if(url=='/node')

{

res.write('<html>')

res.write('<head><title></title></head>')

res.write('<body><h1>Welcome to my Node js project</h1></body>')

res.write('</html>');

return res.end();



}



});





server.listen(4000);