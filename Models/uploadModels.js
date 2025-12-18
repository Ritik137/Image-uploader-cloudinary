import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename: String,
    url: String,
    uploadedAt: {
        type:Date,
        default:Date.now,
    },
})

export default mongoose.model("File", fileSchema);