/*
Unions, any, unknown, and never
- `|` lets a value be one of several types.
- `any` is flexible but unsafe, so it should be avoided when possible.
- `unknown` is safer because we must check it before using it.
- `never` means a function should never return normally.
Real web use: handling API states, form values, and error paths in production apps.
*/

// Unions
  let subs:number | string = 10

  subs = "1M"

  let status: "Not Done"|"Doing"|"Done" = "Not Done"

  status = "Doing"

// Any
  let orders = ['12','11','10','9']

  let currentorder; // this would be auto matically be infered as any

  // we can also do

  let anyData:any = 10

  anyData = "string"

  for(let order of orders)
  {
    if (order == "12") {
      currentorder = order
      break

    }
  }