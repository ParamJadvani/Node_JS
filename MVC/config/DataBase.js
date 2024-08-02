const mongoose = require('mongoose');

const connectDB =async ()=>{
    try {
        await mongoose.connect('mongodb+srv://Jay-Kalsariya:Jay@mvc-node-js.bpk8opa.mongodb.net/?retryWrites=true&w=majority&appName=MVC-NODE-JS', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }

}

module.exports = connectDB;