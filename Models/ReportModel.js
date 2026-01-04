import mongoose from "mongoose"

const reportSchema = new mongoose.Schema(
  {
    // 🔐 User who submitted the report
    user: {
      id: {
        type: String, // Better Auth user id
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
    },

    // 📝 Report details
    reason: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    // 📎 Optional evidence (image URL, file URL, etc.)
    evidence: {
      type: String,
      default: null,
    },

    // 📊 Admin workflow
    status: {
      type: String,
      enum: ["pending", "reviewed", "resolved", "rejected"],
      default: "pending",
    },

    adminNote: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
)

export const Report = mongoose.model("Report", reportSchema)
