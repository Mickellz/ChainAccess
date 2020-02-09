const Cube = require('./block');

const cube = new Cube('somedata','test','lol','somedata');

console.log(cube.toString());

console.log(Cube.genesisBlock().toString());

const block = Cube.addBlock(Cube.genesisBlock(),'foo');

console.log(block.toString());