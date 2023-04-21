const express = require('express');
const Query = require('../models/Query');
const router = express.Router();

const {body} = require("express-validator");
const User = require("../models/User");



const isAlive = (req, res, next) => {
    console.log("In Alive body ", req.body);
    console.log("In Alive user ", req.session);

    if(req.session.user){
        next()
        console.log("Authorised")
        return
    }
    return res.status(401).send("Unauthorized...");
}


router.use(isAlive)

router.get('/getQueries', async (req, res) => {
    try {
        if (req.session.user.role == "TA") {
            const users = await Query.find({"std_roll" : req.session.user.roll});
        }
        else if (req.session.user.role == "Student") {
            const users = await Query.find({"ta_roll" : req.session.user.roll});
        }
        res.status(200).json({ "data": users })
    } catch (err) {
        res.status(500).send("Something went wrong!")
    }
})


// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.post('/AddStudentComment', [

    body('ExamName', 'Which Exam it is').isLength({ min: 3 }),
    body('CourseName', 'Which Course it is').isLength({ min: 3 }),
    body('Question No', 'Enter Question Number').isLength({ min: 3 }),
    body('TA Name', 'select TA').isLength({ min: 3 }),
    body('comments', 'Description must be atleast 5 characters').isLength({ min: 5 }) ], async (req, res) => {
    try {
        console.log("In AddStudentComment: ", req.body);
         const { Exam, Course, Question, TA, stdComments } = req.body;

         console.log(TA, req.session.user.roll ,  Exam, Course, Question, stdComments);

        const Insert = new Query({
         ta_roll: TA, std_roll: req.session.user.roll ,  exam_name: Exam, course_name: Course , question_num: Question, ta_comment : "" , std_comment: stdComments, Is_Active : true })


        const savedNote = await Insert.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })

router.put('/PostTAComment', async (req, res) => {
    const { StudentRoll, ExamName, Question, Course, comment } = req.body;

    if (!ExamName || !ExamName || !Course) {
        return res.status(400).send("Something is missing");
    }

    const existStd = await User.findOne({ $and : [{StudentRoll}, {ExamName}, {Question}, {Course}]} );
    if (!existStd) {
        return res.status(500).json({ msg: "Student doesn't exist..." });
    }

    const std = await Query.updateOne( { StudentRoll, ExamName, Question , Course, 'ta_roll' : req.session.user.roll},
        { $set: {ta_comment : comment} },
        { upsert:true, new : true });

    if (std) {
        return res.status(200).json({ data: std })
    }
    else {
        return res.status(500).json({ msg: "Couldn't update student details" })
    }
})


module.exports = router