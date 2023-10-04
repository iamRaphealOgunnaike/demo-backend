const {writeFileSync} = require('fs')
for (let i = 0; i <1000; i++){
  writeFileSync('./modules/content/big.txt',`hello world ${i}\m`, { flag: 'a'})
} 