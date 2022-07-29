function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  for (let elem of friends) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `${elem.firstName} ${elem.lastName}`;
    newUl.appendChild(newLi);
}
  return newUl;
}
