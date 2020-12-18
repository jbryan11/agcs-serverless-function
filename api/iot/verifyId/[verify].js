const connectToDatabase = require("../../../utils/mongodb");
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
    const {verify} = req.query
    console.log(uid)
    console.log(verify);
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const studentCollection = db.collection("students");
  const employeeCollection = db.collection("employee");

    const student = await studentCollection.findOne({ UID: verify });
    const employee = await employeeCollection.findOne({ UID: verify});
    employee || student
      ? res.status(200).json({ data: "verified" })
      : res.status(200).json({ data: "not verified" });

};
