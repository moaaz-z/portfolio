const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'dist');
http.createServer((req,res)=>{
  const url=decodeURIComponent(req.url.split('?')[0]);
  const target=path.resolve(root,'.'+(url==='/'?'/index.html':url));
  if(!target.startsWith(root)||!fs.existsSync(target)||fs.statSync(target).isDirectory()){res.writeHead(404);return res.end('Not found')}
  res.setHeader('Content-Type',target.endsWith('.png')?'image/png':target.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream');
  fs.createReadStream(target).pipe(res);
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
