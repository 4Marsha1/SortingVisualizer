import React from 'react';
import styles from './Navbar.module.css';

const Index = () => {
    return (
        <nav className={styles['navbar']}>
            <span className={styles['logo']}>Sorting</span>
            <div className={styles['links']}>
                <span className={styles['link']}>Home</span>
                <span className={styles['link']}>
                    <a href="https://github.com/4Marsha1/SortingVisualizer" target="_blank">
                        Source Code
                    </a>
                </span>
                <input className={styles['searchbar']} type="text" placeholder='Search...' />
                <button className={styles['search-btn']}>Search</button>
            </div>
        </nav>
    )
}

export default Index
