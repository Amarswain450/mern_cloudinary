const express = require('express');
const router = express.Router();

const {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
    uploadProfile
} = require('../controllers/students_controller');

router.route('/').post(createStudent).get(getStudents);
router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);
router.route('/:id/upload').post(uploadProfile);

module.exports = router;