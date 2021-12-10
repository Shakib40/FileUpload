const app = require("./index");

const connect = require("./configs/db");


app.listen(2466, async function () {
    await connect();
    console.log("Listening on port 2466");
  });
  