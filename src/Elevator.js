import React from 'react';
import { FLOORS, FLOOR_HEIGHT } from './constants';

const offset = 20;
const width = 360;

function Pulleys({ floor }) {
  return (
    <g>
      {/* left pulley */}
      <circle cx={offset * 2.5 + width / 4} cy={offset / 2} r={ offset / 2} className="pulley"/>
      {/* right pulley */}
      <circle cx={width - offset} cy={offset / 2} r={ offset / 2 } className="pulley"/>
    </g>
  )
}

function Labels() {
  return new Array(FLOORS).fill(0).map((_, floor) => (
    <text
      key={`label-${floor}`}
      text-anchor="middle"
      x={ offset }
      y={(floor) * FLOOR_HEIGHT + FLOOR_HEIGHT / 2 + offset} >{ FLOORS - floor }</text>
  ));
}

export default function Elevator({ floor }) {
  return (
    <svg width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2 }>
      <rect className="background" width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2}></rect>
      <rect className="carriage" x={ offset * 2 } y={ floor * FLOOR_HEIGHT + offset } width={width / 2 } height={FLOOR_HEIGHT} />
      <Labels />
      <Pulleys floor={ floor } />
    </svg>
  )
}