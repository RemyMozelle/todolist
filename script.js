const submitTask = document.querySelector("#submitTask");
const ul = document.querySelector("#task");

submitTask.addEventListener('submit', (e) => {
  //supprimer le comportement du formulaire
  e.preventDefault();
  //creer un element li
  const li = document.createElement("li");
  //ajout une valeur dans l'input
  li.innerHTML = e.target.valueTask.value;
  //ajout la valeur de l'input dans le "ul"
  ul.appendChild(li);
  //reset le formulaire
  e.target.reset();
})
