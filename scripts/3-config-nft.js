import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x44668372070062B4aB166e2cd20f4Dde1362053d");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Annakili poster",
        description: "This NFT will give you access to Ilaiyaraaja Fans DAO!",
        image: readFileSync("scripts/assets/Annakili_poster.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();