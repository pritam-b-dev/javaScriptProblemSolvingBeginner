/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let x = 81;
let sumX = 0;

while (x <= 131) {
  if (x % 2 === 1) {
    sumX = sumX + x;
  }
  x++;
}
console.log("sum of odd numbers from 81 to 131:", sumX);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let y = 206;
let sumY = 0;

while (y <= 311) {
  if (y % 2 === 0) {
    //console.log(y);
    sumY = sumY + y;
  }
  y++;
}
console.log("sum of even numbers from 206 to 311:", sumY);

/*programming hero*/
