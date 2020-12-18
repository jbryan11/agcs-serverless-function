const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {
  const data = req.body.form;
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const traffic = db.collection("traffic")
    const result = await traffic.insertOne(data);
    if(result > 0) res.status(200).json({message:"Success"})   

};
