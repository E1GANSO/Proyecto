import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Products from './Components/Products';
import {BrowserRouter } from 'react-router-dom';
import MisRoutes from './MisRutas';
import GridProduct from './Components/GridProduct';

/*
function App() {
  return (
    <Container fluid>
      <GridProduct/>
    </Container>
  );
}
*/

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header/>
        <Products/>
        <MisRoutes/>
      </BrowserRouter>
    </Container>
  );
}



export default App;
