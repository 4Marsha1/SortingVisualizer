import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { URL_PREFIX } from './constants';
import HomeScreen from './containers/Homescreen';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path={URL_PREFIX + '/homescreen'}
                    element={<HomeScreen />}
                    key='route-homescreen'
                />
                <Route
                    exact
                    path='/'
                    element={<Navigate replace to={URL_PREFIX + '/homescreen'} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
