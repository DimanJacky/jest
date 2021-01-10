import React from 'react';
import Cars from "../Cars/Cars";
import {shallow} from 'enzyme';

describe('Testing Cars', () => {
    it('Cars have rendered correctly', () => {
        const cars = [
            {name: 'audi', year: 2018},
            {name: 'chevrolet', year: 2017},
            {name: 'mazda', year: 2020},
        ];
        const car = shallow(<Cars cars={cars} />);
        expect(car).toMatchSnapshot();
    });
});
