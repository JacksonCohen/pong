import React from 'react';
import Ball from './Ball';
import Player from './Player';
import Score from './Score';

function Board() {
  return (
    <div>
      <Score />
      <Player />
      <Ball />
    </div>
  );
}

export default Board;
