/**
 * 
 * @param {SAN String} position 
 * @returns an array of 2 indexes [x,y]
 */
export function sanToIndex(position) {
  if (position.length === 4) {
    return [8 - parseInt(position[3]), position[2].charCodeAt() - 'a'.charCodeAt()]
  }
  if (position.length === 3) {
    return [8 - parseInt(position[2]), position[1].charCodeAt() - 'a'.charCodeAt()];
  }
  return [8 - parseInt(position[1]), position[0].charCodeAt() - 'a'.charCodeAt()];
}

export function indexToSAN(position) {
  var str = '';
  str += String.fromCharCode(position[1] + 'a'.charCodeAt());
  str += String.fromCharCode(8 - position[0] + '0'.charCodeAt()); 
  return str;
}

export function highlightedPosition(board, position) {
  return board.state.highlighted.find(arr => arr[0] === position[0] 
    && arr[1] === position[1]) !== undefined ? true : false;
}