function highlight(table) {
  let trRows = table.querySelectorAll("tr");
    for(let row of trRows){
        for(let cell of row.cells){
          if (cell.hasAttribute("data-available")) {
            if (cell.dataset.available === "true"){
              row.classList.add('available');
            }
            else{
              row.classList.add('unavailable');
            } 
          }
          else{
            row.setAttribute('hidden','true');
          }
      let item = +cell.textContent;
      if (cell.innerText === 'm'){
        row.classList.add('male');
      }
      else if (cell.innerText === 'f'){
        row.classList.add('female');
      }
      else if (item < 18){
        row.style.textDecoration = "line-through";
      }   
    }
  }
}
