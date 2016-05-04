import {SEARCH_DONE, SEARCH_PENDING_FOR_NEXT, SEARCH_PENDING} from '../actions/SearchActions';

const initalState = {
    status: 'IDLE',
    page: 0,
    photos: []
};

export default function searchPhotos(state = initalState, action) {
    switch (action.type) {
        case SEARCH_DONE:
            return {
                ...state,
                photos: [...state.photos, ...action.photos],
                status: 'DONE',
                page: action.page, keyword: action.keyword
            };
        case SEARCH_PENDING_FOR_NEXT:
            return {
                ...state,
                status: 'PENDING_FOR_NEXT',
            }
            break;
        case SEARCH_PENDING:
            return {
                ...state,
                photos: [],
                status: 'PENDING',
            }
        default:
            return state;
    }
}