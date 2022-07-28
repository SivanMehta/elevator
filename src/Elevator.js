import React from 'react';
import { FLOORS, FLOOR_HEIGHT } from './constants';

const offset = 20;
const width = 360;

function Pulleys({ floor }) {
  const leftCenter = offset * 2.5 + width / 4;
  return (
    <g>
      {/* left pulley */}
      <circle cx={leftCenter} cy={offset / 2} r={ offset / 2} className="pulley"/>
      <line className='cable'
        x1={offset * 2 + width / 4} y1={offset / 2}
        x2={offset * 2 + width / 4} y2={ floor * FLOOR_HEIGHT + offset  }/>
      {/* right pulley */}
      <circle cx={width - offset * 1.5} cy={offset / 2} r={ offset / 2 } className="pulley"/>
      <line className='cable'
        x1={width - offset} y1={offset / 2}
        x2={width - offset} y2={ (FLOORS - floor - 1) * FLOOR_HEIGHT + offset  }/>
      <rect className="counterweight" x={ width - offset * 1.5 } y={ (FLOORS - floor - 1) * FLOOR_HEIGHT + offset } width={ offset } height={FLOOR_HEIGHT} />
    </g>
  )
}

function Labels() {
  return new Array(FLOORS).fill(0).map((_, floor) => (
    <text
      key={`label-${floor}`}
      textAnchor="middle"
      x={ offset }
      y={(floor) * FLOOR_HEIGHT + FLOOR_HEIGHT / 2 + offset} >{ FLOORS - floor }</text>
  ));
}

export default function Elevator({ floor }) {
  return (
    <svg width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2 }>
      <rect className="background" width={ width } height={ FLOORS * FLOOR_HEIGHT + offset * 2}></rect>
      <rect className="carriage" x={ offset * 2 } y={ floor * FLOOR_HEIGHT + offset } width={ width * .8 } height={FLOOR_HEIGHT} />
      <Labels />
      <Pulleys floor={ floor } />
    </svg>
  )
}