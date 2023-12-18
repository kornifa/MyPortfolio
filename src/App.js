
import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Home, About, Skills, Project, Service, Qualification, Contact, Testimonials, Footer, Scrollup} from './Componnents/import';

function App() {
  return (
    <>
     <Container>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills/>
          <Project/>
          <Service/>
          <Qualification/>
          <Testimonials/>
          <Contact/>
        </main>
      </Container>
      <Footer/>
      <Scrollup/>
    </>
   
  );
}

export default App;
