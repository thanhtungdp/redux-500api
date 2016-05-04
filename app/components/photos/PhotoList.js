import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class PhotoList extends Component {

    constructor() {
        super(...arguments);
        this.scrollToLoad.bind(this)();
        this.state = {
            modalPhoto: {
                show: false,
                image: ''
            }
        };
    }

    nextPage() {
        this.props.searchNextPageAction();
    }

    scrollToLoad() {
        window.addEventListener('scroll', function () {
            if (this.props.status == 'DONE') {
                console.log(document.body.scrollHeight + 'vs' + document.body.scrollTop + 'vs' + window.innerHeight);
                if (document.body.scrollHeight <= document.body.scrollTop + window.innerHeight) {
                    this.nextPage();
                }
            }
        }.bind(this));
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.props.photos.map((item, index)=> {
                            return (
                                <div className="col-md-3 image-item" key={`PhotoItem_${item.id}_${index}`}>
                                    <img src={item.image_url} alt=""/>
                                </div>
                            )
                        })
                    }
                    <div className="cleafix"/>
                </div>

                {this.props.status == 'DONE' &&
                    <div style={{marginBottom: '20px'}} className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <button onClick={this.nextPage.bind(this)} type="button"
                                    className="btn btn-default btn-lg btn-block">
                                Load more
                            </button>
                        </div>
                    </div>
                }

                {this.props.status == 'PENDING_FOR_NEXT' && this.props.page >= 1 &&
                    <div className="loading"></div>
                }
            </div>
        )
    }
}

PhotoList.propTypes = {
    actions: PropTypes.object,
    photos: PropTypes.array,
    status: PropTypes.string,
    page: PropTypes.number
}