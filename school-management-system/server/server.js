const app = require('./app'); 
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;


// Database Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


// Start the server
app.listen(PORT, () => console.log(`server started on ${PORT}`));
