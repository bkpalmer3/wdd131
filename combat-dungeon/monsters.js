const monsters = [
      {
    "name": "Mimic",
    "meta": "Medium monstrosity, neutral",
    "Armor_Class": "12 (Natural Armor)",
    "Hit_Point_avg": "58 ",
    "Hit_Point_roll":" 9d8 + 18",
    "Speed": "15 ft. ",
    "STR": "17",
    "STR_mod": "(+3)",
    "DEX": "12",
    "DEX_mod": "(+1)",
    "CON": "15",
    "CON_mod": "(+2)",
    "INT": "5",
    "INT_mod": "(-3)",
    "WIS": "13",
    "WIS_mod": "(+1)",
    "CHA": "8",
    "CHA_mod": "(-1)",
    "Skills": "Stealth +5",
    "Damage_Immunities": "Acid",
    "Condition_Immunities": "Prone",
    "Senses": "Darkvision 60 ft.,  Passive Perception 11",
    "Languages": "--",
    "Challenge": "2 (450 XP)",
    "Traits": "<p><em><strong>Shapechanger.</strong></em> The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies. </p><p><em><strong>Adhesive (Object Form Only).</strong></em> The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage. </p><p><em><strong>False Appearance (Object Form Only).</strong></em> While the mimic remains motionless, it is indistinguishable from an ordinary object. </p><p><em><strong>Grappler.</strong></em> The mimic has advantage on attack rolls against any creature grappled by it.</p>",
    "Actions": "<p><em><strong>Pseudopod.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +5 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.</p>",
    "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/211/315/315/636252764731637373.jpeg"
  },

]

  function createCardTemplate(monster){
    return `<div class="monster-card">
    <img src=${monster.img_url} alt="image of the monster">
    <p class="name"${monster.name}</p>
    <div class="stats">
        <p><strong>HP:</strong> <span id="health">${monster.Hit_Point_avg}</span></p>
        <p><strong>AC:</strong> <span id="ac">${monster.Armor_Class}</span></p>
        <div class="ability-scores">
            <p><strong>STR:</strong> ${monster.STR} ${monster.STR_mod} <strong>DEX:</strong> ${monster.DEX} ${monster.DEX_mod} <strong>CON:</strong> ${monster.CON} ${monster.CON_mod} <strong>INT:</strong> ${monster.INT} ${monster.INT_mod} <strong>WIS:</strong> ${monster.WIS} ${monster.WIS_mod} <strong>CHA:</strong> ${monster.CHA} ${monster.CHA_mod}</p>
        </div>
        <div class="immunities">
            <p><strong>Damage Immunities: </strong> ${monster.Damage_Immunities} <strong>Condition Immunities: </strong> ${monster.Condition_Immunities}
        </div>
        <div class="traits">
            <p><strong>Actions:</strong> <span id="actions">${monster.Actions}</span>
            <p><strong>Traits:</strong> <span id="traits">${monster.Traits}</span>
            <p><strong>Skills:</strong> <span id="skills">${monster.Skills}</span>
        </div>
    </div>
</div>`
  }


  function renderCards(monsters){
    container = document.querySelector('#card-container')
    card = createCardTemplate(monsters[0])
    container.innerHTML += card

  }

  function init(){
    renderCards(monsters)
  }
  
init()
