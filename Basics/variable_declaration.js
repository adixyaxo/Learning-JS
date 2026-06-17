// WAYS TO DECLARE A VARIABLE
const c = 100;
let x = 10;
var y = 10;
let BigNumber = 100n;
console.log(typeof BigNumber)
account_state = "works"; //works but dont use it
let und;// automatically set to undefined
{
  let x = 20;
  console.log(x);
  var y = 20;
  console.log(y);
}
// c=10; not allowed
console.log(c);
console.table([x,y,account_state,und])

/*NOW IN MODERN CSS WE USE LET INSTEAD OF VAR BECAUSE THE LET KEYWORD STAYS IN THE RESPECTIVE FILE SCOPE IE IF WE HAVE TWO FILES WITH SAME VARIABLE TO CHANGE IT WOULD CHANGE VARIABLE IN A DIFFRENT FILE SO USE LET FORGET VAR
VAR AS ISSUE IN
1.   BLOCK SCOPE
2.   FUNCTIONAL SCOPE*/