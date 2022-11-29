const util = require("util")
a=10
console.log(`the value of a is ${a}`)
details = util.format('my name is %s and my department name is %s','arjun','cse')
console.log(details)


const fs = require('fs')
const readdir =util.promisify(fs.readdir)
readdir(process.cwd()).then(files=>{
    console.log("successful")
    console.log(files)
}).catch(err=>{
    console.log("failed")
})