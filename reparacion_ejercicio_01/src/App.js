import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Products from './Components/Products';
import {BrowserRouter } from 'react-router-dom';
import MisRoutes from './pages/MisRutas';
import {ContextCartProvider} from './context/ContextCart';

function App() {
  return (
    <ContextCartProvider>
      <Container fluid>
        <BrowserRouter>
          <Header/>
          <Products/>
          <MisRoutes/>
        </BrowserRouter>
      </Container>
    </ContextCartProvider>
    
  );
}



export default App;
