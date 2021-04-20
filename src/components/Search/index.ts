import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Search } from './Search';


import { BooksActions } from '../../core/actions';
import { setBook, clearBooks } from '../../core/actionCreators';

function mapDispatchToProps(dispatch: Dispatch<BooksActions>) {
    return ({
        onSearch: (book: string) => {
            dispatch(setBook(book))
        },
        onClear: () => {
            dispatch(clearBooks())
        }
    })
}

export default connect(null, mapDispatchToProps)(Search)