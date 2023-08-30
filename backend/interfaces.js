/* const { Alchemy, Network } = require('alchemy-sdk'); */
const { ThirdwebSDK } = require("@thirdweb-dev/sdk/evm");

const sdk = ThirdwebSDK.fromPrivateKey("6f4201c4d51cf541707293ce9068160b681ee58c57bdbbe09592e2151007d6d2", "fantom-testnet");


/* const settings = {
    apiKey: "GW9M6f_Mv-pbTYBcCPJFl1prtJOinOd7",
    network: Network.MATIC_MUMBAI
}; */

const callAlchemy = async (wallet) => {
    const contract = await sdk.getContract("0xbe7F372D972111c49277dA84EDF967B833A67ab9");
   const amount = 1000000000000000000n; //Fixed Token Value per bottle
   const data = await contract.call("mintTo", wallet, amount);
   console.log(data);
    return data;
}

/* (async () => {
    try {
      const amount = 1000000000000000000n; //Fixed Token Value per bottle
      const toAddress = (wallet); // Destination address (wallet)
       const data = await contract.call("mintTo", toAddress, amount);
       console.log(data);
       const balance = await sdk.wallet.balance();
       console.log(balance);
        } catch (error) {
          console.error("Error minting PET tokens", error);
        }
  
      })();
 */
module.exports = { callAlchemy };
