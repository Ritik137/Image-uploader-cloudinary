import express from 'express';
import multer from 'multer';
import { uploadFile } from '../Controllers/uploadController.js';

const router = express.Router();

// ✅ Memory storage (buffer milega)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.get('/', (req, res) => {
    res.render('index.ejs', { url: null });
});

router.post('/upload', upload.single('file'), uploadFile);

export default router;
