import { ErrorBoundary } from '../ErrorBoundary';
import './App.scss';

import { About } from '../../Container/About';
import { Footer} from '../../Container/Footer';
import { Header } from '../../Container/Header';
import { Skills } from '../../Container/Skills';
import { Testimonial } from '../../Container/Testimonial';
import { Work } from '../../Container/Work';
import { Navbar } from '../Navbar';



function App() {

  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
