const mongoose = require('mongoose');

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/info_db',
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            //     useFindAndModify: false,
            //     useCreateIndex: true,
            // }
        );

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit process on error
    }
};


