const url=require('url')
// //  const address="https://github.com/#arjun"
// //  const urlObj=url.parse(address)
// // console.log(urlObj)

// const myUrl=new URL('https://github.com/#cse')
// console.log(myUrl.href)

// myUrl.hash='vvce'
// console.log(myUrl.href)
const path ="C:\\Users\\admin\\OneDrive\\Desktop\\New folder (2)\\abhi.pdf"
console.log(url.pathToFileURL(path))
const myurl =url.pathToFileURL(path)
console.log(url.fileURLToPath(myurl))
