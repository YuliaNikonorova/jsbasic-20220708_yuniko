function getMinMax(str) {
  let arr = str.split(' ');
  let minArr = arr[0];
  let maxArr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] < minArr) {
      minArr = +arr[i];
    }
    else if (+arr[i] > maxArr){
      maxArr = +arr[i];
    } 
  }
  return {min: minArr, max: maxArr};
}