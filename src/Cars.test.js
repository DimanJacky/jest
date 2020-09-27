import React from 'react';
import Cars from "./Cars";
import renderer from 'react-test-renderer'

describe('Testing Cars', () => {
    it('Cars have rendered correctly', () => {
        const car = renderer.create(<Cars/>).toJSON();
        expect(car).toMatchSnapshot();
    });
});
