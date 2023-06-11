import multer from 'multer';
import fs from 'fs';

// Set the storage and set file name to save
const storage = multer.diskStorage({
  // Destination file to save
  destination: 'public/images/profiles/',
  filename: (req, file, cb) => {
    // Set name file
    const fileName = `${req.user.id}-${req.user.firstName}-${req.user.lastName}.${file.mimetype.split('/')[1]}`;
    // Set file patch to check file is exists or not
    const filePath = `public/images/profiles/${fileName}`;
    cb(null, fileName);

    // Check if a file with the same name already exists
    if (fs.existsSync(filePath)) {
      // Delete the existing file
      fs.unlinkSync(filePath);
    }

    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
