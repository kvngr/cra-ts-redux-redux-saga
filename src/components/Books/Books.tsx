import { FC } from 'react';
import { Container, Row, Card, CardColumns } from 'react-bootstrap';
import { Books as BooksTypes, ResponseStatus } from '../../@types';

type BooksProps = {
    isLoading?: boolean;
    books?: BooksTypes;
    error?: Error | string | null;
    status?: ResponseStatus;
}

export const Books: FC<BooksProps> = ({ isLoading, books, error, status }) => {
console.log("🚀 ~ file: Books.tsx ~ line 13 ~ books", books)
    if(error) {
        return (
            <Container>
                <Row xs={12}>
                    <div>Une erreur est survenue lors du chargement veuillez réessayer</div>
                </Row>
            </Container>
        )
    }

    if(books?.totalItems === 0) {
        return (
            <Container>
                <Row xs={12}>
                    <div>Aucun livre n'a été trouvé</div>
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row xs={12}>
                {
                    isLoading
                        ? <div>Chargement ...</div>
                        : null
                }
                    <CardColumns>
                        {
                            books && books.items.map((book) => {
                                return (
                                    <Card key={book.id + book.etag} style={{ width: '18rem' }} className="mb-2">
                                        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail &&
                                            <Card.Img variant="top" alt={`${book.id}-${book.volumeInfo.title}`} src={book.volumeInfo.imageLinks.thumbnail}  />
                                        }
                                        <Card.Body>
                                            <Card.Title>{book.volumeInfo.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    {book.volumeInfo.authors}
                                                </Card.Subtitle>
                                                    <Card.Text>
                                                        {book.volumeInfo.description}
                                                    </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </CardColumns>
            </Row>
        </Container>
    )
}