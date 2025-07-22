
import { monsters } from './all-monsters.js';

function createBattleCardTemplate(monster){
  return `
  <div class="combat-card">
      <img class="profile" src=${monster.img_url} alt="image of the monster">
      <p class="name"><strong>${monster.name}</strong></p>
      <div class="stats">
            <div class="health-container">
                <p><strong>HP:</strong> <span class="health">${monster.hit_points}</span></p>
            </div>
          <p><strong>AC:</strong> <span class="ac">${monster.armor_class}</span></p>
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
        <button class="close-viewer bttn">X</button>
        <h2>${monster.name}</h2>
        <p><strong>Actions:</strong> <span id="actions">${monster.actions}</span></p>
        <p><strong>Traits:</strong> <span id="traits">${monster.traits}</span></p>
        <p><strong>Skills:</strong> <span id="skills">${monster.skills}</span></p>
      </div>
</div>`

}

function activateButtons(){
  const overlay = document.querySelector('.overlay');
  const buttons = document.querySelectorAll('.bttn');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
    const card = event.target.closest('.combat-card');
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

const cbBttn = document.querySelector('#cb-bttn')
cbBttn.addEventListener('click', (event) => {
  const healthContainers = document.querySelectorAll(".health-container");
  const cbmIds = JSON.parse(localStorage.getItem('combatMonsters')) || [];

  healthContainers.forEach((hpCon, index) => {
    const monsterId = cbmIds[index];
    const monster = monsters[monsterId - 1];  // adjust for 0-based index

    hpCon.innerHTML = `
      <p><strong>HP:</strong> <span class="health">${monster.hit_points}</span></p>
      <input type="number" class="damage">
      <button class="dmg-bttn">+</button>
      <button class="dmg-bttn">-</button>
    `;

    const healthSpan = hpCon.querySelector('.health');
    const avgHp = calculateHP(healthSpan.textContent);
   
    healthSpan.textContent = avgHp;

    const dmgBttns = document.querySelectorAll('.dmg-bttn')
    dmgBttns.forEach(bttn =>{
    bttn.addEventListener('click', () =>{

        const healthContainer = bttn.closest('.health-container')
        const currentHP = healthContainer.querySelector('.health')
        const dmgHeal = healthContainer.querySelector('.damage')
        
        let newHP = parseInt(currentHP.textContent);
        let difference = parseInt(dmgHeal.value);
        
        if (isNaN(difference)) difference = 0;

        if (bttn.textContent === "+"){
            newHP += difference
        }else if (bttn.textContent === '-'){
            newHP -= difference
            if (newHP < 0) newHP = 0;
        }
        
        currentHP.textContent = newHP
        dmgHeal.value = ""
    })
})
  });
});


}






function renderBattleCards(monsters, ids){
  let combatContainer = document.querySelector('#combat-container');
  ids.forEach(id => {
      const combatCard = createBattleCardTemplate(monsters[id -1]);
      combatContainer.innerHTML += combatCard;
    
  });

}

function init(){
    const cbmIds = JSON.parse(localStorage.getItem('combatMonsters')) || [];
    renderBattleCards(monsters, cbmIds)

}

const clearBttn = document.querySelector('#clear')
clearBttn.addEventListener('click', (event) => {
    localStorage.removeItem('combatMonsters');
    location.reload();   
})

function calculateHP(healthString){
    let parts = healthString.split(' ')
    const avgHp = parts[0]
    return avgHp
    
}

init()
activateButtons()
