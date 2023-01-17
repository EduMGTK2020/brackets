module.exports = function check(str, bracketsConfig) {

  const pairs = new Set
  const same = new Set
  const stack = []
    
  bracketsConfig.map( el => { pairs[el[0]] = el[1] })

  for (const sym of str) {

    if (pairs[sym] && !same[sym]) {
      stack.push(sym);
      if (pairs[sym] == sym) {
        same[sym] = true
      }
    } 
    else {  
      last = stack.pop()
      if (!last) {
        return false;
      }
      if (same[sym]) {
        same[sym] = false
      }
      if (pairs[last] != sym) {
        return false
      }  
    }
  }
  return stack.length === 0;
}

