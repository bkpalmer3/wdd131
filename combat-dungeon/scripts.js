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
        <button class="bttn" id="bttn">Show More</button>
      <div class="traits hide">
        <p><strong>Actions:</strong> <span id="actions">${monster.actions}</span>
        <p><strong>Traits:</strong> <span id="traits">${monster.traits}</span>
        <p><strong>Skills:</strong> <span id="skills">${monster.skills}</span>
      </div>
</div>`
  }


  function renderCards(monsters){
    let container = document.querySelector('#card-container')
    const card = createCardTemplate(monsters[203])
    container.innerHTML += card

  }

  function init(){
    renderCards(monsters)
  }
  
init()
