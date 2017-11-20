const n = [
  [1980,85606],
  [1990,92345],
  [2000,98235],
  [2010,102210]
]

//valor que procura
const e = 2005

let soma = 0

for (let i = 0; i < n.length; i++) {
  
  let y = n[i][1]  
  let xi = n[i][0]

  let prod = 0

  for (let j = 0; j < n.length; j++) {
    let xj = n[j][0]

    if(i != j && prod === 0){
      prod = (e - xj)/(xi - xj)
    }else if(i != j){
      prod = prod * (e - xj)/(xi - xj)
    }
  }

  soma = soma + y*prod
}