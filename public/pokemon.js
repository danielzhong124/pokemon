"use strict";
(function(){


  window.addEventListener("load", init);

  function init() {
    let radios = qsa("input[name='team']");
    for (let i = 0; i < radios.length; i++) {
      if(radios[i].value==="first"){
        radios[i].checked=true;
      }
      radios[i].addEventListener("change", toggleTeam);
    }

    processPokemon();
    processItemsandMoves();
  }

  function processPokemon(){
    let team=qsa(".pokemon td");

    for(let i=0; i<team.length; i++){
      if(team[i].querySelector("img").alt!==""){
        fetch("/pokemon/"+team[i].querySelector("img").alt)
          .then(checkStatus)
          .then(resp=>resp.json())
          .then(resp=>{
            team[i].querySelector("p").textContent=resp["name"];
            team[i].querySelector("img").src=resp["img"];

            for(let j=0; j<resp["types"].length; j++){
              let type=gen("span");
              type.textContent=resp["types"][j];
              type.classList.add(resp["types"][j]);
              team[i].appendChild(type);
            }
          })
          .catch(console.error);
        }
    }
  }

  function processItemsandMoves(){

  }

  function toggleTeam(){
        id("first").classList.toggle("hidden");
        id("rematch").classList.toggle("hidden");
  }

  function checkStatus(response) {
    if (!response.ok) { // response.status >= 200 && response.status < 300
       throw Error("Error in request: " + response.statusText);
    }
    return response;
  }

  function id(id){
    return document.getElementById(id);
  }

  function qs(query){
    return document.querySelector(query);
  }

  function qsa(query){
    return document.querySelectorAll(query);
  }

  function gen(tag){
    return document.createElement(tag);
  }

})();
