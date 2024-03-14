const fs = require("fs");

const files = fs.readdirSync("./src/images");

fs.writeFileSync(
  "./src/js/images.js",
  files.map((img, i) => `import Image${i} from "../images/${img}"`).join("\n")
);
