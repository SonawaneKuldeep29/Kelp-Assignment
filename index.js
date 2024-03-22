const csvtojsonv = require('csvtojson')

const csvfilepath = "simple.csv"

csvtojsonv()
.fromFile(csvfilepath)
.then((json)=>{
    console.log(json)
})
