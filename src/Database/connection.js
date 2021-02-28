const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://<marin73tomas>:<tetra$$9898>@cluster0.v0x5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default mongoose;
