// import express from "express";
// import cors from "cors";
// import authRoutes from './routes/authRoutes.js';
// import mentorshipRoutes from "./routes/mentorshipRoutes.js";
// import feedbackRoutes from "./routes/feedbackRoutes.js";
// import achievementRoutes from "./routes/achievementsRoutes.js";
// import appointmentsRoutes from "./routes/appointmentsRoutes.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // To parse JSON request bodies

// // Routes
// app.get("/", (req, res)=> {
//     res.send("MentorMentee Platform API");
// })

// app.use('/api/auth', authRoutes);
// app.use('/api/mentorships', mentorshipRoutes);
// app.use("/api/feedback", feedbackRoutes);
// app.use("/api/achievements", achievementRoutes);
// app.use("/api/appointments", appointmentsRoutes);

// export { app };

import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import url from 'url';  // Import the 'url' module
import authRoutes from './routes/authRoutes.js';
import mentorshipRoutes from './routes/mentorshipRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import achievementRoutes from './routes/achievementsRoutes.js';
import appointmentsRoutes from './routes/appointmentsRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Get the current directory using import.meta.url
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  // Convert file URL to path

const uploadsDir = path.join(__dirname, 'uploads');

// Ensure the 'uploads' directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files (documents uploaded by mentees)
app.use('/uploads', express.static(uploadsDir));

// Routes
app.get("/", (req, res) => {
  res.send("MentorMentee Platform API");
});

app.use('/api/auth', authRoutes);
app.use('/api/mentorships', mentorshipRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/appointments', appointmentsRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

export { app };

