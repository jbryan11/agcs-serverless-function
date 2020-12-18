const connectToDatabase = require("../../../utils/mongodb");

module.exports = async (req, res) => {
  const { uid } = req.query;
  console.log(uid);

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const studentCollection = db.collection("students");
  const employeeCollection = db.collection("employee");

  const student = await studentCollection.findOne({ UID: uid });
  //const employee = await employeeCollection.findOne({ UID: uid });
  student
    ? res.status(200).json({ data: "verified" })
    : res.status(200).json({ data: "not verified" });
};
