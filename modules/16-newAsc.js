const { readFile, writeFile } = require("fs");
const { result } = require("lodash");
const path = require("path");

console.log('start')
readFile('./modules/content/first.txt','utf8',(err, result)=>{
  if(err){
    console.log(err);
    return
  }
  const first = result
  readFile('./modules/content/second.txt','utf8',(err, result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result
    writeFile('./modules/content/result-async.txt',`Here is the result: ${first}+${second}`,
    (err, result)=>{
      console.log(err)
      return
    })
  });
})