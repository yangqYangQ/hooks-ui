import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

describe('button', () => {
    it('是一个 div', () => {
        let tree = renderer.create(<Button/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});