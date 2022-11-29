const path = require('path')
path1 = "C:\\Users\\bash\\index.js"
filename = path.basename(path1,'.js')
console.log(filename)

//path.dirname
dirName =path.dirname(path1)
console.log(dirName)

//path.extname()
extName = path.extname('index.rm.pdf')
console.log(extName)

//
extName = path.extname(__filename)
console.log(extName)

//path.parse()
path1="C:\\Users\\bash\\index.js"
details=path.parse(path1)
console.log(details)

//path.join()
basePath = "C:\\Users\\bash\\index.js"
fileName = "vvce.html"
finalPath = path.join(basePath,fileName)
console.log(finalPath)
//path.normalize
path1="C:\\Users\\admin"
console.log(path.normalize(path1))


