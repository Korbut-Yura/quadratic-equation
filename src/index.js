module.exports = function solveEquation(equation) {
  let result = [];
  equation = equation.replace(/\s/g, '');
  let matches = equation.match(/-?\d+(\.\d+)?/g);
  let a = +matches[0],
      b = +matches[2],
      c = +matches[3];

  let disc = Math.pow(b,2)-4*a*c;
  if (disc > 0) {
    result[0] = Math.round((-b+Math.sqrt(disc))/2/a);
    result[1] = Math.round((-b-Math.sqrt(disc))/2/a); 
  }
  return result.sort(function(a,b) {
    return a-b;
  });
}
