import React from 'react';
import { FLOORS, FLOOR_HEIGHT } from './constants';

const offset = 20;
const width = 360;

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
    <svg width={ width } height={ FLOORS * FLOOR_HEIGHT + offset }>
      <rect className="background" width={ width } height={ FLOORS * FLOOR_HEIGHT + offset }></rect>
      <g>
        <rect className="elevator" x={ offset * 2 } y={ floor * FLOOR_HEIGHT + offset } width={width - offset} height="100" />
        <Labels />
      </g>
    </svg>
  )
}