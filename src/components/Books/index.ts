import { connect } from 'react-redux';

import { AppState } from '../../core/store';
import { Books } from './Books';

function mapStateToProps(state: AppState) {
    return {
        books: state.bookReducer.books,
        isLoading: state.bookReducer.isLoading,
        status: state.bookReducer.status,
        error: state.bookReducer.error,
    }
}

export default connect(
    mapStateToProps,
    null
)(Books);