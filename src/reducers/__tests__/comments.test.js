import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    
    const newState = commentsReducer([], action);
    
    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'asdfasdf'});

    expect(newState).toEqual([]);
});