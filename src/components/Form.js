import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        gpa: '',
        extracurricular: '',
        internships: '',
        projects: '',
        leadership: '',
        competitions: '',
        research: ''
    });

    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
const generateResult=async()=>{
try{
    const url="";
    const res=await fetch(url);
    const data=await res.json;
}
catch{

}
};

// Function to handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5500/result', formData);
        setResult(response.data.career);  // Update state with the response data
    } catch (error) {
        console.error('There was an error making the request!', error);
    }
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    GPA:
                    <input type="number" name="gpa" value={formData.gpa} onChange={handleChange} />
                </label>
                <label>
                    Extracurricular Activities:
                    <input type="number" name="extracurricular" value={formData.extracurricular} onChange={handleChange} />
                </label>
                <label>
                    Internships:
                    <input type="number" name="internships" value={formData.internships} onChange={handleChange} />
                </label>
                <label>
                    Projects:
                    <input type="number" name="projects" value={formData.projects} onChange={handleChange} />
                </label>
                <label>
                    Leadership Positions:
                    <input type="number" name="leadership" value={formData.leadership} onChange={handleChange} />
                </label>
                <label>
                    Field-Specific Competitions:
                    <input type="number" name="competitions" value={formData.competitions} onChange={handleChange} />
                </label>
                <label>
                    Research Experience:
                    <input type="number" name="research" value={formData.research} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {result && <div>Suggested Career Path: {result}</div>}
        </div>
    );
};

export default Form;
