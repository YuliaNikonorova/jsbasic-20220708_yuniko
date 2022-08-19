function toggleText() {
  let but1 = document.querySelector('.toggle-text-button');
  let text1 = document.querySelector('#text');
  but1.onclick = function() {
    if (text1.hidden == true){
      text1.hidden = false;//показывает текст
    }
    else{
      text1.hidden = true;//скрывает текст
    }
  }; 
}