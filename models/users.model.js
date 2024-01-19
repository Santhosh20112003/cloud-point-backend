import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, required: true, unique: true},
	provider: { type: String, required: true }
},{timestamps:true})

const userModel = mongoose.model("Authentication",userSchema);

userModel.createIndexes().catch(err=>{console.error(err)});

export default userModel;