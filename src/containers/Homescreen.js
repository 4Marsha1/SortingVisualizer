import '../App.css';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mergeSort } from '../components/Algorithms/mergeSort';
import { ANIMATION_SPEED_MS, NUMBER_OF_ARRAY_BARS, PRIMARY_COLOR, SECONDARY_COLOR } from '../constants';

class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
        }
    }

    resetArray = () => {
        const array = [];
        for (let i = 0, t = 500; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(Math.round(Math.random() * t));
        }
        this.setState({ data: array });
    }

    componentDidMount() {
        this.resetArray();
    }

    mergeSortAlgo = () => {
        const animations = mergeSort(this.state.data);
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOne, barTwo] = animations[i];
                const barOneStyle = bars[barOne].style;
                const barTwoStyle = bars[barTwo].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOne, newHeight] = animations[i];
                    const barOneStyle = bars[barOne].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    render() {
        const bars = this.state.data.map((bar, index) => {
            return <div key={index} className='bar' style={{ height: `${bar}px` }}></div>
        });
        return (
            <>
                <Navbar />
                <div className='app'>
                    <main className='container'>
                        <div className='bars'>
                            {bars}
                        </div>
                    </main>
                    <section className='buttons'>
                        <button className='btn' onClick={() => this.resetArray()}>Reset Array</button>
                        <button className='btn'>Bubble Sort</button>
                        <button className='btn'>Insertion Sort</button>
                        <button className='btn'>Selection Sort</button>
                        <button className='btn' onClick={() => this.mergeSortAlgo()}>Merge Sort</button>
                        <button className='btn'>Quick Sort</button>
                        <button className='btn'>Count Sort</button>
                    </section>
                </div>
                <Footer />
            </>
        );
    }
}

export default HomeScreen;