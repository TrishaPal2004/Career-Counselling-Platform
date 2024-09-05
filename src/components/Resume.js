// src/components/PredictForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PredictForm = () => {
    const [urlCv, setUrlCv] = useState('');
    const [savePath, setSavePath] = useState('');
    const [resumeType, setResumeType] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/predictionRoute/predict', {
                urlCv,
                savePath,
                resumeType
            });
            setResult(response.data);
            setError(null);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
            setResult(null);
        }
    };

    return (
        <div>
            <h1>Resume Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        CV URL:
                        <input
                            type="text"
                            value={urlCv}
                            onChange={(e) => setUrlCv(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Save Path:
                        <input
                            type="text"
                            value={savePath}
                            onChange={(e) => setSavePath(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Resume Type:
                        <input
                            type="text"
                            value={resumeType}
                            onChange={(e) => setResumeType(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error.message || error}</p>}
            {result && (
                <div>
                    <h2>Prediction Results</h2>
                    <p><strong>Rating:</strong> {result.data.rating}</p>
                    <p><strong>Missing Keywords:</strong> {result.data.missing_keywords.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default PredictForm;
