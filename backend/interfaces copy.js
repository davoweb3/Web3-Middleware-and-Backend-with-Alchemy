
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
const sdk = ThirdwebSDK.fromPrivateKey("6f4201c4d51cf541707293ce9068160b681ee58c57bdbbe09592e2151007d6d2", "fantom-testnet");
const contract = await sdk.getContract("0x2936C1Af841F61cf6489B5B989c5070b2b6A2Df5");

(async () => {
  try {
    const amount = 1000000000000000000n; //Fixed Token Value per bottle
    const toAddress = ("0x3A91077653988d88E33D0a86E9E93cA92cFeE7A4"); // Destination address (wallet)
     const data = await contract.call("mintTo", toAddress, amount);
     console.log(data);
     const balance = await sdk.wallet.balance();
     console.log(balance);
      } catch (error) {
        console.error("Error minting PET tokens", error);
      }

    })();