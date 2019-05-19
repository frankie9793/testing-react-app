import React from 'react';
import { mount } from 'enzyme'; // importing statement for fulldom 
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {

    beforeEach(() => {
        //we simulate change by passing in fake object called target which has a prop called value
        // in the CommentBox's handleChange method the event object is now replaced by this
        wrapped.find('textarea').simulate('change', {   
            target: { value: 'new comment'}
        });

        //force update because setState is asynchronus and it doesn't update straight away
        // which might result in wrong testing
        wrapped.update();

    });

    it('has a text area that users can type in', () => {

        // expect the prop we passed in called value to textarea to now be equal to 
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, ', () => {

        wrapped.find('textarea').simulate('change', {   
            target: { value: 'new comment'}
        });

        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');

    })

});