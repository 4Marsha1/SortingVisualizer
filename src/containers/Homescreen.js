import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomescreenComponent from '../components/Homescreen';

class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { name: 10, uv: 10 },
                { name: 7, uv: 7 },
                { name: 2, uv: 2 },
                { name: 5, uv: 5 },
                { name: 4, uv: 4 },
                { name: 9, uv: 9 },
                { name: 1, uv: 1 },
                { name: 3, uv: 3 },
                { name: 8, uv: 8 },
                { name: 6, uv: 6 },
            ]
        }
    }

    sort = data => {
        let n = data.length;
        for (let i = 0; i < n; i++) {
            let cnt = 0;
            for (let j = 0; j < n - i - 1; j++) {
                if (data[j].uv > data[j + 1].uv) {
                    let t = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = t;
                    cnt = cnt + 1;
                }
            }
            if (cnt === 0) {
                break;
            }
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <HomescreenComponent data={this.state.data} sort={this.sort} />
                <Footer />
            </>
        );
    }
}

export default HomeScreen;