import React from 'react';
import Car from "./Car/Car";

const Cars = (props) => (
    <ul className="Cars">
        {
            props.cars.map(({name,year},i) => (
                <Car key={i} name={name} year={year} />
            ))
        }
    </ul>
);

export default Cars;
