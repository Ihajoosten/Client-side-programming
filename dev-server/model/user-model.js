import mongoose from "mongoose";
import { StringUtility } from '../utilities/string-utility.js'

const userSchema = new mongoose.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function() {
    const first = StringUtility.capitalize(this.first.toLowerCase());
    const last =  StringUtility.capitalize(this.last.toLowerCase());
    return `${first} ${last}`;
});

userSchema.pre('save', function(next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    next();
});

export default mongoose.model("user", userSchema);
