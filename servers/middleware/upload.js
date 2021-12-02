const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file , cb)=>{
        cb(null,'public/uploads/')
    },
    filename: (req, file, cd) => {
        const ext = path.extname(file.originalname)
        cd(null,Date.now()+ext)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/png"
        ) {
            callback(null,true)
        } else {
            console.log('only jpg & png file supported!')
            callback(null,false)
        }
    },
    limits: {
        fileSize: 2080 * 2080 * 2
    }
})

module.exports = upload