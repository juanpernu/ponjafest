import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email.'],
  },
  instagram: {
    type: String,
    required: [true, 'Please provide a instagram.'],
  },
  phone: {
    type: Number,
    required: [true, 'Please provide a phone number.'],
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
