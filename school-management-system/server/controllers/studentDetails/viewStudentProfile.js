const Student = require('../../models/Student');

// Fetch full student profile
const viewStudentProfile = async (req, res) => {
  const { studentId } = req.body;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student profile:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch selected fields: name, age, grade, section
const fetchStudentDetails = async (req, res) => {
  try {
    const students = await Student.find().select("name age grade section");
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching student details:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  viewStudentProfile,
  fetchStudentDetails,
};
