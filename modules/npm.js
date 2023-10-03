//npm - global command, comes with node
//nom --version 

// local dependency - use it only in this particular project
// npm i <packageName>


// global dependence - use it in any project
// npm install -g <packageName>
// sudo npm install-g <packageName> (mac)

// package.json - manifest file (stores important info about project/package )
// manual apporach (create package.json in the root, ceate properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _= require('lodash') 

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems);
console.log('Hello worlyd!')