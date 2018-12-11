const makeTrack = (node1, node2) => {
  if (node1[0] == node2[0]) {
    return range(node1[1], node2[1]).map(x => [node1[0], x])
  } else if (node1[1] == node2[1]) {
    return range(node1[0], node2[0]).map(x => [x, node1[1]])
  } else {
    throw `Strange nodes, cannot make a track between [${node1}] and [${node2}]`
  }
    
}

const range = ( nStart, nFinish, currentRange=[] ) => {
  nNewStart = nStart;
  
  if (nStart == nFinish) {
    return [...currentRange];
  }
  
  nNewStart += ((nFinish > nStart) ? 1 : -1);
  newCurrentRange = [...currentRange, nNewStart];
  
  return range(nNewStart, nFinish, newCurrentRange);
}


console.log(makeTrack([1, -6], [4, -5]));

