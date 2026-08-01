/*
Type narrowing
- Narrowing means reducing a broad type to a more specific one.
- This is very useful after checks like `typeof`, truthy checks, and `switch` cases.
- It helps us write safer code without repeated errors.
Real web use: checking whether user input is a string, number, or null before processing it.
*/

function chai(kind:string | number)
{
  if(typeof kind == 'string'){
    return `Making ${kind} Chai...`
  }
  return `Chai order ${kind}`
}

function serveChai(msg?:string)
{
  if(msg){
    return `Serving ${msg}`
  }
  return `Serving Normal Chai`
}


// Exaustive checks
function orderChai(size:"small"|"medium"|"large"|number)
{
  if (size=="small")
  {
    return "small chai"
  }
  else if (size=="medium")
  {
    return "medium chai"
  }
  else if (size=="large")
  {
    return "large chai"
  }
  return `chai order #${size}`
}