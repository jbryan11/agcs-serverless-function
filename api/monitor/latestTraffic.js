const connectToDatabase = require("../../utils/mongodb");

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGO_URL);
  const trafficCollection = db.collection("traffic");

  //const employee = await employeeCollection.findOne({ UID: uid });
  
    const cursor = trafficCollection.find({}).sort({_id:-1}).limit(1);
    const results = await cursor.toArray()
    console.log(results.length)
  res.status(200).json({message:"SUCCESS"});
 
};
