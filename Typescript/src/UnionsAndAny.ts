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