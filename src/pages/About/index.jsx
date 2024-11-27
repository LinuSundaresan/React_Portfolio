import './about.css';

const About = () => {

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h6>
                        <strong>About Me</strong>
                    </h6>
                    <p>
                        I am a skilled web developer with over 7 years of experience specializing in PHP, CodeIgniter, and MySQL. Additionally, I have proficiency in the MERN stack, enabling me to create dynamic and scalable web applications. With a strong foundation in backend and frontend development, I excel at building efficient, user-friendly solutions tailored to meet business needs. I am passionate about learning new technologies and delivering high-quality, innovative projects.
                    </p>
                    <hr />
                    <h6>Personal Info</h6>

                    <div className="personal-info-container">
                        <div className="personal-info-col-1">
                            <p>Address: <span>MPR 85</span></p>  
                            <p>Email: <span>linusundaresan@gmail.com</span></p> 
                            <p>Phone <span>8078248403</span></p> 
                        </div>
                        <div className="personal-info-col-2">
                            <p>Main Language: <span>English</span></p>  
                            <p>Secondary Language: <span>Malayalam</span></p>
                            <p>Marital Status: <span>Married</span></p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default About;