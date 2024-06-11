const fs=require('fs');
 requestHandler=(req,res)=>{

    const url=req.url
    if(url=='/')

        {
        
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
          
          if(err){
            console.log(err)
        }
        res.write('<html>')
        
        res.write('<head><title></title></head>')
        res.write(`<body>${data}</body>`)
        
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        
        res.write('</html>');
        return res.end();
        })
        }
        
        
        
        
        else if(url==='/message' && req.method == "POST")
          {
            const body=[];
            req.on('data',(chunk)=>{
              body.push(chunk);
              console.log(chunk)
            })
            req.on('end',()=>{
              const parsed=Buffer.concat(body).toString();
              console.log(parsed);
              const me=parsed.split('=')[1];
              
            fs.writeFileSync('message.txt',me);
            
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end()
        
          })
        }

}

module.exports=requestHandler;
