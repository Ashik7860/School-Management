const User = require('../../models/User');
const Student = require('../../models/Student');

const deleteUserProfileByEmail = async (req, res) => {
    const { email } = req.body;
    const adminUserId = req.userId;

    try {
        // Validate email
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        // Find the requesting user (admin) by userId from the token
        const adminUser = await User.findById(adminUserId);
        if (!adminUser || adminUser.role !== 'Admin') {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        // Find the user by email
        const userToDelete = await User.findOne({ email });
        if (!userToDelete) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete user profile
        await User.findByIdAndDelete(userToDelete._id);

        // Delete associated student profile if exists
        await Student.findOneAndDelete({ userId: userToDelete._id });

        return res.status(200).json({ message: "User profile deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting user profile", error: error.message });
    }
};

module.exports = deleteUserProfileByEmail;
