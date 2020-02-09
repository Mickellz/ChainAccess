const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain',()=>
{
    let bc,bc2;

    beforeEach(()=>
    {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });
    it('starts with genesis block',()=>
    {
        expect(bc.chain[0]).toEqual(Block.genesisBlock());
    });
    it('new block',()=>
    {
        const data = 'GenesisCube';
        bc.newCube(data);
        //bc.newCube(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });
    it('validates a valid chain',()=>
    {
        bc2.newCube('test');
//true or false assertions in jest (toBe(x))
        expect(bc.validChain(bc2.chain)).toBe(true);
    });
    //tests to see if the genesis block is tampered with
    it('Checks for corrupt genesis block',()=>
    {
        bc2.chain[0].data="baddata";
//true or false assertions in jest (toBe(x))
        expect(bc.validChain(bc2.chain)).toBe(false);
    });
    it('invalidates a corrupt chain',()=>
    {
        bc2.newCube('test');
        bc2.chain[1].data="fr";
        //SHOULD NOT RETURN TRUE
        expect(bc.validChain(bc2.chain)).toBe(false);
    });

    it('replaces the chain with a valid chain',()=>
    {
        bc2.newCube('newCube');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    });
});