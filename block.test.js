const Cube = require('./block');
//description for this test
describe('Cube', () => 
{
    let data,previousBlock,block;
    beforeEach(()=>
    {
        //making variables to use for our testing
        data = 'bar';
        previousBlock = Cube.genesisBlock();
        block = Cube.addBlock(previousBlock,data);
    });
//which test we are executing
it('sets the `data` to match the input', ()=>
{
    //takes an object or data like string as first imput, then chain methods after
    //data carried into object block to equal variable data
    expect(block.data).toEqual(data);
});
it('sets the `previousHash` to match the hash of the last block',()=>
{
    //data carried into object block to equal parameters of hash in genesis block
    expect(block.previousHash).toEqual(previousBlock.hash);
});
});