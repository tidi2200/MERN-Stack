import mongoose from 'mongoose';
import courseModel from '../models/courseModel.js';

export function createCourse (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    const course = new courseModel({
        title: req.body.title,
        description: req.body.description
    });

    return course
        .save()
        .then(newCourse => {
            return res.status(200).json({
                success: 'ok',
                message: 'New course created successfully',
                course: newCourse
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'Error'
            });
        });
}

export function getAllCourse (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    courseModel.find()
        .select('_id title description')
        .then(data => {
            return res.status(200).json({
                success: 'ok',
                message: 'Successfully',
                courses: data
            });
        })
        .catch(error => {
            res.status(400).json({
                succes: false,
                message: 'Error'
            });
        });
}