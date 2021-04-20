import { ChangeEvent, FC } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

type SearchProps = {
    onSearch: (book: string) => void;
    onClear: () => void;
}

export const Search: FC<SearchProps> = (props) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("🚀 ~ file: Search.tsx ~ line 12 ~ handleOnChange ~ event.target.value", event.target.value)
        if(event.target.value === '') {
            props.onClear();
        }
        props.onSearch(event.target.value);
    }

    return (
        <Container>
            <Row sm={12}>
                <Col>
                    <Form>
                        <Form.Group  controlId="formBook">
                            <Form.Control size="lg" type="text" placeholder="Search book" onChange={handleOnChange} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}