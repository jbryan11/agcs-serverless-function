const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {
  const data = req.body.form;
  const { gate } = req.query;
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const gateCollection = db.collection("gates");

  //const employee = await employeeCollection.findOne({ UID: uid });
  if (gateFound) {
    result = await gateCollection.update(
      { gateName: gate },
      { $set: { data } }
    );
    res.status(200).json({message:"SUCCESS"})
  }
 
};
