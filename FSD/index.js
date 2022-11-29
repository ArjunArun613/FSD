const myhttp=require('http')
const port=8081
myhttp.createServer((req,res)=>{
    console.log("welcome")

}).listen(port);
console.log(`server is running @ http://localhost:${port}`); 
