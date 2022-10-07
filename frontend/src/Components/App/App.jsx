import { ErrorBoundary } from '../ErrorBoundary';
import './App.scss';

import { About } from '../../Container/About';
import { Footer} from '../../Container/Footer';
import { Header } from '../../Container/Header';
import { Skills } from '../../Container/Skills';
import { Testimonial } from '../../Container/Testimonial';
import { Work } from '../../Container/Work';
import { Navbar } from '../Navbar';
import { createTheme, ThemeProvider } from '@material-ui/core';


const theme = createTheme({
  typography: {
      fontFamily: ['Futura PT', 'sans-serif'].join(','),
      fontSize: 16
  }
});




function App() {

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Navbar></Navbar>
          <Header></Header>
          <Work></Work>
          <About></About>
          <Skills></Skills>
          <Testimonial></Testimonial>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
