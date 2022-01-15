import React from 'react';
import styles from './Footer.module.css';

const Index = () => {
    return (
        <footer className={styles['footer']}>
            <span className={styles['text']}>Follow me on:</span>
            <div className={styles['links']}>
                <a href="https://www.linkedin.com/in/abhishek-bharadwaz-458993192/" target='_blank'><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/bharadwaz.abhishek/" target='_blank'><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/bharadwaz_abhishek/?hl=en" target='_blank'><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/Abhishek0696" target='_blank'><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/4Marsha1" target='_blank'><i class="fab fa-github"></i></a>
            </div>
            <span className={styles['copyright']}>&copy; Abhishek Bharadwaz 2022</span>
        </footer>
    )
}

export default Index
