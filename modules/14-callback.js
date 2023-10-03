const { readFile, writeFile} = require('fs')
const { result } = require('lodash')

console.log('start')
readFile('./modules/content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./modules/content/second.txt', 'utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./modules/content/result-async.txt',`Here is the result:${first},${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')