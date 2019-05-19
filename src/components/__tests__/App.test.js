import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach( () => {
    wrapped = shallow(<App />); // before every single test do a common setup logic
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1); // find() returns an array of instances found
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});