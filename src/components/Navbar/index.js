import React from 'react';
import styles from './Navbar.module.css';

const Index = () => {
    return (
        <nav className={styles['navbar']}>
            <span className={styles['logo']}>Sorting</span>
            <div className={styles['links']}>
                <span className={styles['link']}>Home</span>
                <form >
                    <select className={`${styles['link']} ${styles['dropdown']}`}>
                        <option >Bubble</option>
                        <option >Insertion</option>
                        <option >Selection</option>
                    </select>
                </form>
                <input className={styles['searchbar']} type="text" placeholder='Search...' />
                <button className={styles['search-btn']}>Search</button>
            </div>
        </nav>
    )
}

export default Index
