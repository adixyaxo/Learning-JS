// Learning About Gaurd Rails

class Kulladh {
  serve(){
    return `Serving Kulhad Chai`
  }
}

class Cutting {
  serve(){
    return `Serving Cutting Chai`
  }
}


function serve(chai:Kulladh | Cutting)
{
  if (chai instanceof Kulladh) {
    return chai.serve()
  }

  if (chai instanceof Cutting) {
    return chai.serve()
  }
}

type ChaiOrder = {
  type:string
  sugar:number
}


function isChaiOrder(obj:any):obj is ChaiOrder{
  return(
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  )
}

function serveOrder(item:ChaiOrder|string){
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar}`
  }
  return `Serving Custom Chai ${item}`
}

type MasalaChai = {type:"Masala";spicelevel:number}
type GingerChai = {type:"Ginger";gingerlevel:number}
type ElaichiChai = {type:"Elaichi";elichilevel:number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:Chai) {
  switch (order.type) {
    case "Masala":
      return `Masala Chai banri hai ladle`

    case "Elaichi":
      return `Elaichi banawe che`

    case "Ginger":
      return `Adrak wali chai banri hai ladle`
  }
}