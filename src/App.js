import react from 'react';
import './App.css'
import {About, Footer , Header, Mandala} from './containers';
import {Display, Navbar, Setting , feature} from './components';
// import {RegistrationForm} from './RegistrationForm';

const App = () => {
    return (
        <div className='App'>
            <div className="gradient__bg">

                <Navbar />
                <Header />
            </div>
            <About />
            <Mandala />
            <Footer />
        </div>
    );

} 

export default App;