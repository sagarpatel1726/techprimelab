import mongoose, { Date } from "mongoose";
const project = new mongoose.Schema({
    category: { type: String, required: true},
    department: { type: String, required: true},
    division: { type: String, required: true},
    enddate: { type: Date, required: true},
    location: { type: String, required: true},
    priority: { type: String, required: true},
    reason: { type: String, required: true},
    startdate: { type: Date, required: true,  validate: {
        validator : function (value: Date): boolean {
            let end = (this as any).enddate 
            console.log({end})
          // 'this' refers to the document being validated;
          return value < end
        },
        message: 'Start date must be less than end date',
      },
    },
    status: { type: String, required: true},
    theme: { type: String, required: true},
    type: { type: String, required: true},
})

export default mongoose.model('Project',project);

