import React, { useRef } from 'react'
import './Testimonial.css'
import next_btn from '../../Images/next-icon.png'
import back_btn from '../../Images/back-icon.png'
import user_1 from '../../Images/user-1.png'
import user_2 from '../../Images/user-2.png'
import user_3 from '../../Images/user-3.png'
import user_4 from '../../Images/user-4.png'

const Testimonial = () => {
    const slider = useRef(null);
    const tx = useRef(0);
    const totalSlides = 5; // Total 5 slides hain aapke li element mein
    const slideWidth = 20; // Har slide 20% width lega (100/5 = 20)

    const slideForward = () => {
        // Max translation calculate karo: -((totalSlides - visibleSlides) * slideWidth)
        // Maan lo 1 visible slide hai, toh max translate = -((5-1) * 20) = -80
        if (tx.current > -((totalSlides - 1) * slideWidth)) {
            tx.current -= slideWidth;
            slider.current.style.transform = `translateX(${tx.current}%)`;
            slider.current.style.transition = 'transform 0.5s ease-in-out';
            updateButtons();
        }
    }

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += slideWidth;
            slider.current.style.transform = `translateX(${tx.current}%)`;
            slider.current.style.transition = 'transform 0.5s ease-in-out';
            updateButtons();
        }
    }

    const updateButtons = () => {
        const nextBtn = document.querySelector('.next-btn');
        const backBtn = document.querySelector('.back-btn');
        
        if (nextBtn && backBtn) {
            // Disable next button when at the end
            if (tx.current <= -((totalSlides - 1) * slideWidth)) {
                nextBtn.style.opacity = '0.5';
                nextBtn.style.cursor = 'not-allowed';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.cursor = 'pointer';
            }
            
            // Disable back button when at the start
            if (tx.current >= 0) {
                backBtn.style.opacity = '0.5';
                backBtn.style.cursor = 'not-allowed';
            } else {
                backBtn.style.opacity = '1';
                backBtn.style.cursor = 'pointer';
            }
        }
    }

    // Alternative: Auto slide functionality (optional)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         slideForward();
    //     }, 3000);
        
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='testimonials'>
            <img 
                src={next_btn} 
                alt="Next" 
                className='next-btn' 
                onClick={slideForward}
            />
            <img 
                src={back_btn} 
                alt="Back" 
                className='back-btn'
                onClick={slideBackward}
            />
            <div className="slider-container">
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_1} alt="user-1" />
                                    <div>
                                        <h3>Willam Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                        The supportive community, state-of-the-art facilities, and commitment to academic
                                        excellence have truly exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_2} alt="user-2" />
                                    <div>
                                        <h3>Emily Williams</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                        The supportive community, state-of-the-art facilities, and commitment to academic
                                        excellence have truly exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_3} alt="user-3" />
                                    <div>
                                        <h3>Michael Brown</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                        The supportive community, state-of-the-art facilities, and commitment to academic
                                        excellence have truly exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_4} alt="user-4" />
                                    <div>
                                        <h3>Sarah Johnson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                        The supportive community, state-of-the-art facilities, and commitment to academic
                                        excellence have truly exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={user_2} alt="user-5" />
                                    <div>
                                        <h3>David Wilson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                        The supportive community, state-of-the-art facilities, and commitment to academic
                                        excellence have truly exceeded my expectations.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Testimonial