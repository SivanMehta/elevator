import React from 'react';

export const FLOORS = 10;

/**
 * 
 * @param {Element[]} buttons buttons to be arranged in a grid of 3 buttons each
 */
export function arrange(buttons) {
  const grid = [];
  for (let i = 0; i < buttons.length; i += 3) {
    grid.push((
      <div>
        { buttons.slice(i, i + 3) }
      </div>
    ));
  }

  return (
    <div className="row">
      { grid }
    </div>
  )
}