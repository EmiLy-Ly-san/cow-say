import cowsay from "cowsay";
import "dotenv/config";

const { say } = cowsay;
console.log(
  say({ text: `I'm ${process.env.NAME} from ${process.env.CAMPUS}` })
);
