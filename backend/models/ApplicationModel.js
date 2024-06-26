import mongoose from "mongoose";
const ApplicationModel = new mongoose.Schema(
  {
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    offerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "job",
    },
    applicantName: {
      type: String,
      required: true,
    },
    applicantEmail: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      default: "submited",
    },
    resume: {
      type: String,
      required: true,
    },
    offerTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Application = mongoose.model("Application", ApplicationModel);
