import React from 'react';
import styles from './Homescreen.module.css';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Index = ({ data, sort }) => {
    sort(data);
    return (
        <main className={styles['container']}>
            <BarChart width={1000} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" barSize={30} fill="#141414" />
            </BarChart>
        </main>
    )
}

export default Index
