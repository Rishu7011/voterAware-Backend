import { auth } from "../betterAuth/auth.js"
import { fromNodeHeaders } from "better-auth/node"
import cloudinary from "./cloudinary.js"
import { Report } from "../Models/ReportModel.js"
import streamifier from "streamifier"

export async function submitReport(req, res) {
  try {
    //  Get session
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    })

    if (!session?.user) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const { description, reason } = req.body

    if (!description || !reason) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    let imageUrl = null

    // Upload image if provided
    if (req.file) {
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "reports",
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        )

        streamifier.createReadStream(req.file.buffer).pipe(stream)
      })

      imageUrl = uploadResult.secure_url
    }

    //  Save report
    const report = await Report.create({
      user: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      },
      reason,
      description,
      evidence: imageUrl,
    })

    return res.status(201).json({
      message: "Report submitted successfully",
      reportId: report._id,
    })
  } catch (error) {
    console.error("Report submission error:", error)
    return res.status(500).json({ error: "Failed to submit report" })
  }
}