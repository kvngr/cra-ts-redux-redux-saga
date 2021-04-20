import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Search';
import Books from './Books';

export const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
            <Search />
            <Books />
        </Col>
      </Row>
    </Container>
  )
}
