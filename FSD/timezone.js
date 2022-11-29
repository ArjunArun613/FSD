const http=require('http')
const requestModule=require('request')
http.createServer((req,res)=>{

// syntax of request(url,function(inErr,inRes,inBody){})
requestModule("http://worldtimeapi.org/api/timezone/Asia/Kolkata",(inErr,inRes,inBody)=>{

res.end(`The body of requesed url is :${inBody}`);

})

}).listen(8081);