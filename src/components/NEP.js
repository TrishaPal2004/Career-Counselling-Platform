// src/ScholarshipPage.js

import React from 'react';
import './NEP.css'; // Import the CSS file for styles

const NEP = () => {
  return (
    <div>
      <h1>Indian Government Scholarships and NEP 2020 Guidelines</h1>

      <div className="section">
        <h2>Introduction</h2>
        <p>This webpage provides comprehensive information on the Indian government's scholarships for school, undergraduate, and postgraduate students for the academic year 2024-2025. It also covers the guidelines set by the National Education Policy (NEP) 2020 to enhance career counselling and guidance in schools.</p>
      </div>

      <div className="section">
        <h2>National Education Policy (NEP) 2020 Overview</h2>
        <p>The NEP 2020 emphasizes providing a holistic education to students and integrating career counselling from early schooling stages. This policy aims to equip students with the necessary skills and knowledge to make informed career choices.</p>
        <ul>
          <li>Encourages multidisciplinary education and flexibility in choosing subjects.</li>
          <li>Highlights the need for integrating vocational education into mainstream education.</li>
          <li>Focuses on critical thinking, creativity, and problem-solving skills.</li>
          <li>Mandates career counselling as a part of the school curriculum.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Scholarships for School Students</h2>
        <ul>
          <li><strong>Pre-Matric Scholarship for Minorities:</strong> This scholarship supports minority community students from Class I to X. It covers expenses such as tuition fees, maintenance allowance, and more. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>National Means-cum-Merit Scholarship (NMMSS):</strong> Provides financial aid to meritorious students from economically weaker sections to prevent dropouts at the secondary stage. Students in Class IX who have secured at least 55% in Class VIII are eligible. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>National Scheme of Incentive to Girls for Secondary Education (NSIGSE):</strong> This scheme aims to promote the enrollment of girl children belonging to SC/ST communities in secondary education. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Scholarships for Undergraduate (UG) Students</h2>
        <ul>
          <li><strong>Central Sector Scheme of Scholarships for College and University Students:</strong> This scheme provides financial assistance to meritorious students from low-income families to meet day-to-day expenses while pursuing higher studies. Eligibility includes scoring above 80th percentile in the relevant stream in Class XII. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>Post-Matric Scholarship for OBC Students:</strong> Supports the education of OBC students by covering various expenses, including tuition fees and maintenance. It is available for students pursuing post-secondary education. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>PM Yasasvi Scholarship:</strong> Targeted at students from Other Backward Classes (OBC) and Economically Backward Classes (EBC), providing up to INR 20,000 per annum for educational expenses. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Scholarships for Postgraduate (PG) Students</h2>
        <ul>
          <li><strong>National Fellowship and Scholarship for Higher Education of ST Students:</strong> This scheme provides financial assistance to Scheduled Tribe students pursuing M.Phil and Ph.D. programs. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>Post-Matric Scholarship Scheme for SC Students:</strong> Provides financial support for Scheduled Caste students pursuing higher education beyond the matriculation level, covering full tuition fees and other educational expenses. <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
          <li><strong>Indira Gandhi PG Scholarship for Single Girl Child:</strong> Aimed at promoting higher education among girls, providing financial support to single girl children at the postgraduate level. <a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
        </ul>
      </div>

      <div className="section">
        <h2>Guidelines for Career Counselling as per NEP 2020</h2>
        <p>NEP 2020 highlights the importance of career counselling and guidance in schools to help students make informed career decisions. Key guidelines include:</p>
        <ul>
          <li>Integrating career guidance into the school curriculum from an early age.</li>
          <li>Training teachers to act as career mentors and guides.</li>
          <li>Collaboration with professional counsellors for personalized guidance sessions.</li>
          <li>Leveraging technology and digital platforms to provide interactive career exploration tools.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Conclusion</h2>
        <p>Informed career choices can significantly impact a student's future. By utilizing the scholarships and adhering to the NEP 2020 guidelines, students can pursue their educational and career goals effectively. Proper guidance and awareness are essential to navigate the various opportunities available in the education sector.</p>
      </div>
    </div>
  );
};

export default NEP;

