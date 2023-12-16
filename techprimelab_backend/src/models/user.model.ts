import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {
      type: String
    },
    email: {
      type: String
    },
  });

export default mongoose.model('User',user);