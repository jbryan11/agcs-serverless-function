const connectToDatabase = require("../../utils/mongodb");

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const trafficCollection = db.collection("traffic");

  //const employee = await employeeCollection.findOne({ UID: uid });
  
    result = await trafficCollection.find({}).sort({_id:-1}).limit(1);
    result ? 
    res.status(200).json({message:"SUCCESS"}): res.status(401).json({message:"Fail"})
  
 
};
