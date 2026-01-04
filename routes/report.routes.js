import express from "express"
import { submitReport } from "../controllers/report.js"
import { upload } from "../middleware/upload.js"

const router = express.Router()

router.post("/report/submit", upload.single("image"), submitReport)

export default router
