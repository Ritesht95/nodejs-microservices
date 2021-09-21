const app = require("./src/app");
const { DB_URI } = require("./src/config");
const mongoose = require("mongoose");
const cors = require("cors");
console.log("mongo URI-----------------xxxxxxxxxxxx--------------", DB_URI);
mongoose.connect(DB_URI);
app.use(cors());

app.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});
