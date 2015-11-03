function solution1(a,b,c){
  return Math.ceil((b-a)/c);
}

function solution2(a,b){
  var max=0, temp;
  for(i=a; i<=b; i++){
    for (j=a; j<=b; j++){
      temp = i^j;
      if (max<temp){
        max = temp;
      }
    }
  }
  return max;
}
alert(solution1(1,5,2));
alert(solution2(1,5));