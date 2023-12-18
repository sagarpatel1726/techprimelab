import mongoose from "mongoose";

const project = new mongoose.Schema({
    category: { type: String, required: true},
    department: { type: String, required: true},
    division: { type: String, required: true},
    enddate: { type: Date, required: true},
    location: { type: String, required: true},
    priority: { type: String, required: true},
    reason: { type: String, required: true},
    startdate: { type: Date, required: true},
    status: { type: String, required: true},
    theme: { type: String, required: true},
    type: { type: String, required: true},
})

export default mongoose.model('Project',project);

