const LibraryDetails = require('../../models/LibraryDetails');
const User = require('../../models/User');

const fillLibraryDetails = async (req, res) => {
    const { userId, bookTitle, author, category } = req.body;

    try {
        // Validate the userId
        if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid or missing userId" });
        }

        // Check authorization
        const user = await User.findById(userId);
        if (!user || (user.role !== 'librarian' && user.role !== 'Admin')) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        const existingLibraryDetails = await LibraryDetails.findOne({ userId });

        if (existingLibraryDetails) {
            // Update existing library details
            existingLibraryDetails.bookTitle = bookTitle;
            existingLibraryDetails.author = author;
            existingLibraryDetails.category = category;

            await existingLibraryDetails.save();
            return res.status(200).json({
                message: "Library Details updated successfully",
                updatedLibraryDetails: existingLibraryDetails,
            });
        } else {
            // Create new library details if none exist
            const newLibraryDetails = new LibraryDetails({
                userId,
                bookTitle,
                author,
                category,
            });
            await newLibraryDetails.save();
            return res.status(201).json({
                message: "Updated Library Details",
                newLibraryDetails,
            });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error Updating Library Details", error });
    }
};

module.exports = fillLibraryDetails;
