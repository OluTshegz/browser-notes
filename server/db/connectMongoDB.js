import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://olutshegz:Eg4OQcrUCB12nNnc@cluster0.tedfq.mongodb.net/browser-notes?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log(`Connected to MongoDB: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB