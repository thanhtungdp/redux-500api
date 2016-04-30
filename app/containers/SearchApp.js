import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {Grid, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as action from '../actions/SearchActions';
import SearchInput from '../components/SearchInput';
import PhotoList from '../components/PhotoList';

class SearchApp extends Component {
    render() {
        const actions = bindActionCreators(action, this.props.dispatch);
        return (
            <div>
                <div id="header" className="header">
                    <Grid>
                            <Col md={6} mdOffset={3} className="search-bar-content">
                                <h1>Search 500px</h1>
                                <SearchInput actions={actions} status={this.props.status} search={this.props.search} dispatch={this.props.dispatch}/>
                            </Col>
                    </Grid>
                </div>
                <div className="container">
                    <PhotoList actions={actions} photos={this.props.photos} status={this.props.status}
                               page={this.props.page}/>
                </div>
            </div>
        )
    }
}

SearchApp.propTypes = {
    status: PropTypes.string.isRequired,
    photos: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
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


export default connect(mapStateToProps)(SearchApp)