import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Homepage.css";
import logo from "../Photos/logo3.png";
import wp from "../Photos/wp.webp"
import insta from "../Photos/insta.webp"
import i18n from 'i18next';
import pin from "../Photos/pinterest-57.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
const Homepage = () => {
 
    

  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateQuote = async () => {
    try {
      const url = '//https://newsdata.io/api/1/news?apikey=pub_5225326e62881ab53f06ecd571e947848184e&q=News&country=in&language=en&category=education,sports,technology,tourism,world';
      const res = await fetch(url);
      const data = await res.json();
      
      if (data && data.results) {
        setArticles(data.results.map(item => item.title)); // Adjust if the structure is different
        setCurrentIndex(0);
      } else {
        setArticles([]);
        setCurrentIndex(0);
      }
    } catch (error) {
      console.log(`The error is ${error}`);
      setArticles([]);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    generateQuote(); // Fetch news when component mounts
  }, []);
  
  const handleNext = () => {
    if (articles.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change the language
  };

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const navigateSignUp = () => {
        navigate('/signup');
    }

    const navigateDocdata=()=>{
      navigate('/docdata')
    }
    const navigateEngi=()=>{
      navigate('/engi')
    }
    const navigatemanage=()=>{
      navigate('/managedata')
    }
    const navigateprofile=()=>{
      navigate('/profile')
    }
    const navigateResume=()=>{
      navigate('/resume')
    }
  return (
    <div>
      {/* Navbar */}
    

      {/* Intro Section */}
      <div className="intro">
        <div className="text-container">
        <p>Today's career choice shapes tomorrow's</p>
        <div class="hero-marquee">
            <div class="hero-marquee-track"  >
                <div class="hero-marquee-item">WORKFORCE</div>
                <div class="hero-marquee-item">LEADERSHIP</div>
                <div class="hero-marquee-item">SKILLS</div>
                <div class="hero-marquee-item">INNOVATION</div>
            </div>
        </div>
        <p>turning aspirations into impactful achievements.</p>
        </div>
      </div>


      <div className="Sub">
      <p>Countless career choice options know what you are fit for!</p></div>
      <div className="container3">
      <div className="card" style={{ width: '15rem', height: 'auto' }}>
        <img src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ padding: '10px' }}>
          <h5 className="card-title" style={{ fontSize: '1rem',color:'white' }}>Healthcare</h5>
          <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Medicine, nursing, therapy, medical research, and health administration.
          </p>
          <button className="btn4" type="button" style={{ padding: '5px 10px', fontSize: '0.75rem' , color:'white' }} onClick={navigateDocdata}>
                Explore Now !
              </button>
        </div>
      </div>
      {/*No.2*/}
     
      <div className="card" style={{ width: '15rem', height: 'auto' }}>
        <img src="https://guru.com/blog/wp-content/uploads/2023/04/civil-engineer-duties.jpg" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ padding: '10px' }}>
          <h5 className="card-title" style={{ fontSize: '1rem' }}>Engineering</h5>
          <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Civil, mechanical, electrical, chemical, and aerospace engineering.
          </p>
          <button className="btn4" type="button" style={{ padding: '5px 10px', fontSize: '0.75rem' , color:'white' }} onClick={navigateEngi}>
                Explore Now !
              </button>  
        
      </div>
    </div>
      {/*No.3*/}
      
      
      <div className="card" style={{ width: '15rem', height: 'auto' }}>
        <img src="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Blog_Page_On_Important_Roles_of_an_Entrepreneur_471a9e79d5.webp" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ padding: '10px' }}>
          <h5 className="card-title" style={{ fontSize: '1rem' }}>Business and Finance: </h5>
          <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Management, marketing, accounting, finance, entrepreneurship, and human resources. 
          </p>
          <a href="#" className="btn1" style={{ padding: '5px 10px', fontSize: '0.75rem' }}>
            Go somewhere
          </a>
        
      </div>
    </div>
      {/*No.4*/}
    
     
      <div className="card" style={{ width: '15rem', height: 'auto' }}>
        <img src="https://artshemshur.blog/wp-content/uploads/2024/03/images-3.jpeg" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ padding: '10px' }}>
          <h5 className="card-title" style={{ fontSize: '1rem' }}>Creative Arts:</h5>
          <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Design, writing, performing arts, film, and visual arts.
          </p>
          <a href="#" className="btn1" style={{ padding: '5px 10px', fontSize: '0.75rem' }}>
            Go somewhere
          </a>
        
      </div>
    </div>

     {/*No.5*/}
      
      
     <div className="card" style={{ width: '15rem', height: 'auto' }}>
        <img src="https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/hotel-management_210820_124019.webp?mtime=20220330100906&focal=none" className="card-img-top" alt="Card Image" style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ padding: '10px' }}>
          <h5 className="card-title" style={{ fontSize: '1rem' }}>Hospitality and Tourism: </h5>
          <p className="card-text" style={{ fontSize: '0.875rem' }}>
          Hotel management, event planning, and travel services.
          </p>
          <btn className="btn1" style={{ padding: '5px 10px', fontSize: '0.75rem' }}  onclick={navigatemanage}>
            Go somewhere
          </btn>
        
      </div>
    </div>
</div>
    

    <div class="button-container">
    <button class="btn2" href="#">TAKE QUIZ !</button>
</div>

<div className="mentors">
  <div class="image"><img src="https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/hotel-management_210820_124019.webp?mtime=20220330100906&focal=none"/></div>
  <div className="container5"><p>Eliminating the Guesswork from Skill Development</p><p>Contact our reputed mentors now!</p>
  <button className="btn1" id="btn" onClick={handleNext}>
         Click Here!
        </button></div>
  
</div>

<div className="container4">
        Trending News!
        <div className="news">
          {articles.length > 0 ? articles[currentIndex] : 'No news available.'}
        </div>
        <button className="btn1" id="btn" onClick={handleNext}>
          Next
        </button>
      </div>


 {/*Resume analyser*/}
 <div className="containerResume">
 <div className="half-circle-container">
  <div className="resume-content">
    <div className="textr">
      <h1>Precision in Skill Development: Shaping Tomorrow’s Workforce!</h1>
      <ul>
        <li><strong>Personal Branding:</strong> Your resume showcases your professional identity.</li>
        <li><strong>Highlight Strengths:</strong> Emphasize key skills and experiences.</li>
        <li><strong>Tailored Applications:</strong> Customize your resume for specific roles.</li>
        <li><strong>Career Alignment:</strong> Ensure your resume matches your career goals.</li>
        <li><strong>Clear Focus:</strong> Helps set and pursue targeted career objectives.</li>
        <li><strong>Competitive Edge:</strong> Stand out in the job market.</li>
      </ul>
    </div>
    
      <div className="half-circle" style={{height:'60vh',width:'60vh'}}>
        <div className="half-circle-item" style={{height:'30vh',width:'30vh'}}>
          <img src="https://www.mentorcliq.com/wp-content/uploads/2023/02/DSC_6645-Edit-768x525.webp" alt="Item 1" style={{height:'20vh',width:'20vh'}} />
        </div>
        <div className="half-circle-item" style={{height:'30vh',width:'30vh'}}>
          <img src="https://www.mentoring.org/wp-content/uploads/2020/01/MENTOR_image_irl-02.jpg" alt="Item 2" style={{height:'20vh',width:'20vh'}}/>
        </div>
        <div className="half-circle-item" style={{height:'30vh',width:'30vh'}}>
          <img src="https://imgs.search.brave.com/cAcxMcVinbtmgV8AcJ2Hf6LAVxYaeAQI4vLdp49_fuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGVhY2hhd2F5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNS8wNjE0/NDkzMi90ZWFjaGlu/Zy1hYnJvYWQtdHJh/dmVsaW5nLXNvbG8t/MS0xNTB4MTUwLmpw/Zw" alt="Item 3" style={{height:'20vh',width:'20vh'}} />
        </div>
      </div>
    </div>
  </div>
  <div className="button-container">
  <btn className="btn1" style={{ padding: '5px 10px', fontSize: '0.75rem' }}  onClick={navigateResume}>
            Click!
          </btn>
  </div>
</div>







<footer className="footer">
      <div className="footer-content">
        <div className="footer-logos">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={wp} alt="WhatsApp" className="footer-logo"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="footer-logo"/>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <img src={pin} alt="Pinterest" className="footer-logo" />
            </a>

        </div>

       
        <div className="footer-faq">
          <h3>FAQs</h3>
          <ul>
            <li><a href="#faq1">What is the purpose of this site?</a></li>
            <li><a href="#faq2">How can we contact support?</a></li>
            <li><a href="#faq3">What services do we offer?</a></li>
            <li><a href="#faq4">Cookieman</a></li>
            <li><a href="#faq5">Terms and conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
      </div>
    
    
  );
};

export default Homepage;
