const express = require('express');
//const errorLogger = require('../utils/errorLogger'); // Assuming typo corrected from errorLooger to errorLogger
const router = express.Router();
const spawnPython = require('../utils/spawnPython'); // Function to handle Python script execution

router.post('/predict', async (req, res) => {

    try {
        const { urlCv, savePath, resumeType } = req.body;

        // Validate the request body
        if (!urlCv || !savePath || !resumeType) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields (urlCv, savePath, resumeType)',
            });
        }

        // Arguments for Python script
        const args = [
            ['../../ml/resume_checker.py', urlCv, savePath, resumeType] // Adjust script path accordingly
        ];

        const returnedData = args.map(async arg => {
            return await spawnPython(arg)
        })

        const predictions = await Promise.all(returnedData);

        function convertToValidJSON(input) {
            // Remove carriage return and newline characters, trim whitespace, and replace single quotes with double quotes
            const jsonString = input.replace(/\r\n/g, '').replace(/'/g, '"');
            return JSON.parse(jsonString);
        }

        const jsonObjects = predictions.map(convertToValidJSON);

        res.status(200).json({
            success: true,
            message: "Prediction generated",
            data: jsonObjects
        });

    } catch (error) {

        console.log("Error");

    }

})

module.exports = router;
