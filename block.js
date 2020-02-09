const encryption = require('crypto-js/sha256');
class Cube
{
    constructor(timestamp,previousHash,hash,data)
    {
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        //when it says .hash it is this
        this.hash = hash;
        this.data = data;
    }
//to debug our values for what is in our block chain
    toString()
    {
        return `Cube -
        Timestamp---:${this.timestamp}
        previousHash:${this.previousHash.substring(0,10)}
        hash--------:${this.hash.substring(0,10)}
        data--------:${this.data}
        `;
    }
    static genesisBlock()
    {
        return new this('BlackVoid','B7a12v14d','f7r5t-h45h',[]);
    }
    static addBlock(previousBlock,data)
    {
        const timestamp = Date.now();
        //takes the hash value of the return of last function passed into paramters
        const previousHash = previousBlock.hash;
        //using the variables in your constructor
        const hash = Cube.hash(timestamp,previousHash,data);           //^
                                              //
        return new this(timestamp,previousHash,hash,data);
    }
    static hash(timestamp,previousHash,data)
    {
        return encryption('${timestamp}${lastHash}${data}').toString();
    }
    static cubeHash(cube)
    {
        const {timestamp,previousHash,data}=cube;
        return Cube.hash(timestamp,previousHash,data);
    }
}

//exports our class as a module to access it in other files
module.exports = Cube;