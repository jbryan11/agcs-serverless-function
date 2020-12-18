const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const studentCollection = db.collection("students");
  const employeeCollection = db.collection("employee");
 
    const student = await studentCollection.findOne({ UID: "29612150" });
    const employee = await employeeCollection.findOne({ UID: "12391231" });
    employee || student
      ? res.status(200).json({ data: "verified" })
      : res.status(200).json({ data: "not verified" });
};
