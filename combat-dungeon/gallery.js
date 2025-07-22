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
      <div>
        <button class="bttn">Show More</button>
        <button class="cb-add">Add Monster</button>
      </div>
      <div class="more hide">
        <button class="close-viewer bttn">X</button>
        <h2>${monster.name}</h2>
        <p><strong>Actions:</strong> <span id="actions">${monster.actions}</span></p>
        <p><strong>Traits:</strong> <span id="traits">${monster.traits}</span></p>
        <p><strong>Skills:</strong> <span id="skills">${monster.skills}</span></p>
      </div>
      <div class="id hide">${monster.id}</div>
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
  


//Activate buttons

function activateButtons(){
  const overlay = document.querySelector('.overlay');
  const buttons = document.querySelectorAll('.bttn');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
    const card = event.target.closest('.monster-card');
    const more = card.querySelector('.more');
    more.classList.toggle('hide');
    overlay.classList.toggle('hide');
    document.body.classList.toggle('no-scroll')

    });
  });

  
  overlay.addEventListener('click',  () =>{
  const popups = document.querySelectorAll('.more')
  popups.forEach(popup =>{
    popup.classList.add('hide')
    overlay.classList.add('hide')
    document.body.classList.remove('no-scroll')

  })
})

  const cbBttns = document.querySelectorAll('.cb-add');
  cbBttns.forEach(bttn => {
      bttn.addEventListener('click', (event) =>{
          const card = event.target.closest('.monster-card');
          const id = parseInt(card.querySelector('.id').textContent);  //check again later
          
        let combatMonsters = JSON.parse(localStorage.getItem('combatMonsters')) || [];

        combatMonsters.push(id);
        localStorage.setItem('combatMonsters', JSON.stringify(combatMonsters));
        
        alert('Monster has been added')
        // showMsg()
    })
})



}

// function showMsg(){
//     const msg = document.querySelector('#msg')
//     msg.classList.remove('hide')

//     setTimeout(() => {
//     msg.classList.add('hide');
//   }, 2000);

// }

//Close Viewer


//Search 
const searchBttn = document.querySelector('#search-bttn');

searchBttn.addEventListener('click', function(event){
    event.preventDefault();
    const query = document.querySelector('#search').value;
    filterCards(monsters, query);
  

});


function renderSearch(monsterList){
  let container = document.querySelector('#card-container');
  monsterList.forEach(monster => {
    const card = createCardTemplate(monster);
    container.innerHTML += card;
  })


  if (container.children.length === 0){
    container.innerHTML = `<p class="err-msg">No monsters found</p>`
  } 


  activateButtons()};

function filterCards(monsters, query){

    const lowerQuery = query.toLowerCase();
    const filteredcards = monsters.filter(monsters => monsters.name.toLowerCase().includes(lowerQuery));
  let container = document.querySelector('#card-container');
  container.innerHTML = ''

    renderSearch(filteredcards);
    
}

init()
activateButtons()
