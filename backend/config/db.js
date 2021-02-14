import mongoose from 'mongoose'
import '../model/user.js';

export default async function connectDB(database) {
    try {
        const con = await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
