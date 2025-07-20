import { monsters } from './all-monsters.js';

  function createCardTemplate(monster){
    return `
<div class="monster-card">
      <img class="profile" src=${monster.img_url} alt="image of the monster">
      <p class="name"><strong>${monster.name}</strong></p>
      <div class="stats">
          <p><strong>HP:</strong> <span id="health">${monster.hit_points}</span></p>
          <p><strong>AC:</strong> <span id="ac">${monster.armor_class}</span></p>
          <div class="ability-scores">
              <p><strong>STR:</strong> ${monster.str} ${monster.str_mod}</p> 
              <p><strong>DEX:</strong> ${monster.dex} ${monster.dex_mod}</p>
              <p><strong>CON:</strong> ${monster.con} ${monster.con_mod}</p>
              <p><strong>INT:</strong> ${monster.int} ${monster.int_mod}</p>
              <p><strong>WIS:</strong> ${monster.wis} ${monster.wis_mod}</p>
              <p><strong>CHA:</strong> ${monster.cha} ${monster.cha_mod}</p>
        </div>
      </div>
        <button class="bttn">Show More</button>
      <div class="more hide">
        <p><strong>Actions:</strong> <span id="actions">${monster.actions}</span>
        <p><strong>Traits:</strong> <span id="traits">${monster.traits}</span>
        <p><strong>Skills:</strong> <span id="skills">${monster.skills}</span>
      </div>
</div>`;
  }


  function renderCards(monsters, index){
    let container = document.querySelector('#card-container');
  
    const card = createCardTemplate(monsters[index]);
    container.innerHTML += card;

  }

  function init(){
    for (let i = 0; i < 30; i++) {
      renderCards(monsters, i);
    }
  }
  
init()

//Show More

const buttons = document.querySelectorAll('.bttn');
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.monster-card');
    const more = card.querySelector('.more');
    more.classList.toggle('hide');
  });
});

//Search 
// const searchBttn = document.querySelector('#search-bttn');

// searchBttn.addEventListener('click', function(event){
// 	event.preventDefault();
// 	const query = document.querySelector('#search').value;
// 	filterCards(monsters, query);


// });


// function renderSearch(monsterList){
//   let container = document.querySelector('#card-container');
//   filterCards.forEach(monster => {
//     const card = createCardTemplate(monster);
//     container.innerHTML += card;
//   });
// }

// function filterCards(monsters, query){

// 	const lowerQuery = query.toLowerCase();
// 	const filteredcards = monsters.filter(monsters => monsters.name.toLowerCase().includes(lowerQuery));
//   let container = document.querySelector('#card-container');
//   container.innerHTML = ''
// 	renderSearch(filteredcards);
	
// }
