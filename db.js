
import mongoose from 'mongoose'

 const mongooseConfig = {
  URL: loadData("Mongo URL", process.env.MONGO_URL)
}

export const connectToMongoose = async (usage) => {
    try {
        if (usage) {
            await mongoose.connect(mongooseConfig.URL)
            console.log("🟢 Connected to database!")
        }
        else{
            console.log("🟡 Working with no database!")
        }
      } catch (error) {
        console.error(error)
        console.log("Connection failed!")
      }
}
