import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {Grid, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {searchPhotoAction, searchNextPageAction} from '../actions/SearchActions';
import SearchInput from '../../components/photos/SearchInput';
import PhotoList from '../../components/photos/PhotoList';

class SearchAppContainer extends Component {
    render() {
        return (
            <div>
                <div id="header" className="header">
                    <Grid>
                            <Col md={6} mdOffset={3} className="search-bar-content">
                                <h1>Search 500px</h1>
                                <SearchInput {...this.props}/>
                            </Col>
                    </Grid>
                </div>
                <div className="container">
                    <PhotoList {...this.props}/>
                </div>
            </div>
        )
    }
}

SearchAppContainer.propTypes = {
    status: PropTypes.string.isRequired,
    photos: PropTypes.array,
    page: PropTypes.number
}

const mapStateToProps = (state, ownProps) =>
{
    return {
        photos: state.photos.photos,
        status: state.photos.status,
        page: state.photos.page,
        search: ownProps.params.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({searchPhotoAction, searchNextPageAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppContainer)