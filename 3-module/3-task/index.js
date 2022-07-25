function camelize(str){
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '-'){
      delete arr[i];
      arr[++i] = arr[i].toUpperCase();
    }
  }
  str = arr.join('');
  return str;
}
