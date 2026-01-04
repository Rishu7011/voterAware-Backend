import mongoose from "mongoose"

export async function connectMongoose() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    console.error("❌ Mongoose connection failed:", error)
    process.exit(1)
  }
}
