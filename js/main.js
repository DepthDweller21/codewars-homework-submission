// https://www.codewars.com/kata/551f37452ff852b7bd000139
const addBinary=(a,b)=>(a+b).toString(2);
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = arr => {
    return arr.map((el,ind)=>el==1?2**(arr.length-ind-1):0).reduce((x,y)=>x+y,0)
  };
// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    return arr.filter(x=>x>0).reduce((y,x)=>y+x,0)
  }
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
const testEven=n=>n%2==0?true:false;
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
function filter_list(l) {
    return l.filter(x=> typeof x=='number')
  }