// import express from 'express';
// import { authMiddleware } from '../middleware/authMiddleware.js';
// import {
//   uploadAchievement,
//   viewSelfAchievements,
//   viewMenteesAchievements,
// } from '../controllers/achievementController.js';

// const router = express.Router();

// // Route for mentee to upload achievement
// router.post('/upload', authMiddleware, uploadAchievement);

// // Route for mentee to view their own achievements
// router.get('/self', authMiddleware, viewSelfAchievements);

// // Route for mentor to view assigned mentees' achievements
// router.get('/mentees', authMiddleware, viewMenteesAchievements);

// export default router;

// routes/achievementRoutes.js
import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';
import {
  uploadAchievement,
  viewSelfAchievements,
  viewMenteesAchievements,
} from '../controllers/achievementController.js';

const router = express.Router();

// Route for mentee to upload achievement along with documents
router.post('/upload', authMiddleware, upload.array('documents', 5), uploadAchievement);

// Route for mentee to view their own achievements
router.get('/self', authMiddleware, viewSelfAchievements);

// Route for mentor to view assigned mentees' achievements
router.get('/mentees', authMiddleware, viewMenteesAchievements);

export default router;


