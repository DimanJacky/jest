import React from 'react';
import Car from "../Cars/Car/Car";
import {shallow} from 'enzyme';

describe('Testing Car', () => {
    it('Car have rendered correctly', () => {
        const car1 = shallow(<Car/>);
        expect(car1).toMatchSnapshot();
    });
});
