function mainFunction(func) {
  let age = 25;
  func(age);
}
function checkFunction(age) {
  if (age > 18) {
    console.log('You are eligible to vote');
  } else {
    console.log('You are not eligible to vote');
  }
}
mainFunction(checkFunction);

const extraction = (x, y) => x[0] + y[0];
extraction('Roger', 'Walter');
