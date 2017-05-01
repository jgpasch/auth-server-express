import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
  email: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true }
});


// Pre save method to hash plain text password
UserSchema.pre('save', function(next) {

  const saltRounds = 10;
  // generate salt
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return next(err);
    }
    // if salt was successful, then hash password
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      // save hashed password, and call next middleware
      this.password = hash;
      next();
    })
  });
});

UserSchema.methods.comparePasswords = function(inputPassword, cb) {
  bcrypt.compare(inputPassword, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }

    cb(null, isMatch);
  });
}

export const User = mongoose.model('User', UserSchema);
