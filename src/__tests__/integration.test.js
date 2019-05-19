import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    //intercept the req (req link, response obj)
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name : 'Fetched #1'}, {name: 'Fetched #2'}] //mock the data
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
    //find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');
    // introduce a pause so that test doesn't fail while moxios is mocking data

    //Expect to find a list of comments!
    moxios.wait(() => {
        //force update
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        // tells jest here is where the test is actually done
        done();
        wrapped.unmount();
    });
});