//This File is developed by kuldeep sonawane
const csvtojsonv = require('csvtojson')

const csvfilepath = "simple.csv"
//This File is developed by kuldeep sonawane
csvtojsonv()
.fromFile(csvfilepath)
.then((json)=>{
    console.log(json)
})
//This File is developed by kuldeep sonawane
