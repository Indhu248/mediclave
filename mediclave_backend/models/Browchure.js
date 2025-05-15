import mongoose from "mongoose";

const brochureSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  emailCode: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  company: { type: String, required: true }, // University/Company field
  affiliation: { type: String, required: true },
  linkedin: { type: String },
  twitter: { type: String },
  interest: { type: String, required: true }, // Interested In field
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Brochure = mongoose.model("Brochure", brochureSchema);
export default Brochure;