var http=require('http'),fs=require('fs'),path=require('path');
var base=__dirname;
var mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png'};
http.createServer(function(req,res){
  var fp=path.join(base,req.url.split('?')[0]||'/index.html');
  var ext=path.extname(fp);
  try{var d=fs.readFileSync(fp);res.writeHead(200,{'Content-Type':mime[ext]||'text/plain','Cache-Control':'no-cache, no-store, must-revalidate'});res.end(d)}
  catch(e){res.writeHead(404,{'Content-Type':'text/plain'});res.end('404: '+fp)}
}).listen(8765,function(){console.log('http://localhost:8765')});
