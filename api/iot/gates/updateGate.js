const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {
  const data = req.body;
 
  console.log("DATA IS NULL :: ")
  const { gate } = req.query;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const gateCollection = db.collection("gates");

  gateFound = await gateCollection.updateOne(
    { gateName: gate },
    { $set: data  }
  );

 gateFound.nModified > 0
    ? res.status(200).json({ success: "True" })
    : res.status(401).json({ success: "False", notFound: "True" });
};
