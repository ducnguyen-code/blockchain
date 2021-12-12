const hash=require('crypto-js/sha256');

class Block{
    constructor(prev,data){
        this.prevHash=prev;
        this.data=data;
        this.timeStamp=new Date();
        this.hash=this.calculateHash();
    }
    calculateHash(){
        return hash( this.prevHash+JSON.stringify(this.data) + this.timeStamp).toString();
    }
}
class BlockChain{
    constructor(difficulty){
        const genesisBlock=new Block('0000',{isGenesis:true});
        this.chain=[genesisBlock]
        this.difficulty=difficulty
    }
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(data){
        const lastBlock=this.getLastBlock();
        const newBlock=new Block(lastBlock.hash,data)
        this.chain.push(newBlock);
    }
    isValid(){
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock=this.chain[i];
            const preBlock=this.chain[i-1];
            if(currentBlock.prevHash!==preBlock.hash)
            {
                return false;
            }
            if(currentBlock.hash !== currentBlock.calculateHash())
            {
                return false;
            }
            
            
        }
        return true;
    }

}

const atttChain=new BlockChain();
console.log(atttChain);

atttChain.addBlock({
    from:'duc nguyen',
    to:'duc',
    amount:100
})
atttChain.addBlock({
    from:'tran nguyen',
    to:'duc',
    amount:600
})
atttChain.addBlock({
    from:'Lan nguyen',
    to:'duc',
    amount:400
})
console.log(atttChain);
console.log(atttChain.isValid());
atttChain.chain[2].data={
    from:'Lan nguyen',
    to:'duc',
    amount:200
};
atttChain.chain[2].hash=atttChain.chain[2].calculateHash();
console.log(atttChain);
console.log(atttChain.isValid());