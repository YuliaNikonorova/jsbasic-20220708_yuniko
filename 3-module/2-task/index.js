function filterRange(arr, a, b) {
  let arr2 = arr.slice();
  for (let i = 0; i <= arr2.length; i++){
    if (arr2[i] != a || arr2[i] != b){
      arr2.splice(i, 1);
    }
  } 
  return arr2;
}