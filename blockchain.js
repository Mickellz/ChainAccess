const Cube = require('./block');

class Blockchain
{
    constructor()
    {
        this.chain = [Cube.genesisBlock()];
    }

    newCube(data)
    {
        const cube = Cube.addBlock(this.chain[this.chain.length-1],data); 
        this.chain.push(cube);

        return cube; 
    }

    validChain(chain)
    {
        if(JSON.stringify(chain[0])!==JSON.stringify(Cube.genesisBlock()))
        
        return false;
        //CHECK THIS
        for(let i=1;i<chain.length;i++)
        {
            const cubeC = chain[i];
            const previousBlock = chain[i-1];
            if(cubeC.previousHash!==previousBlock.hash ||
                cubeC.hash!==Cube.cubeHash(cubeC))
            {
                return false;
            }
        } 
        return true;
     }
     //replacing a longer and validated chain from one user
     replaceChain(newChain)
     {
        if(newChain.length<=this.chain.length)
        {
            console.log('Current chain is not longer than the current chain.')
            return;
        }else if(!this.validChain(newChain))
        {
            console.log('This chain is not valid')
            return;
        }
        console.log('You have successfuly changed the block chain!');
        this.chain=newChain;
     }
}

module.exports = Blockchain;