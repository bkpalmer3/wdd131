const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };


    function updateCharacter() {
        document.querySelector(".image").src = character.image
        document.querySelector(".image").alt = "A Snortleblat in a swamp"
        document.querySelector(".name").innerHTML = character.name
        document.querySelector("#class").innerHTML = character.class
        document.querySelector("#level").innerHTML = character.level
        document.querySelector("#health").innerHTML = character.health
    }

    document.addEventListener("DOMContentLoaded", updateCharacter)
    attackedButton = document.querySelector('#attacked')
    attackedButton.addEventListener('click', function(){
        character.attacked();
        updateCharacter();
    })
    levelUpButton = document.querySelector('#levelup')
    levelUpButton.addEventListener('click', function() {
        character.levelUp()
        updateCharacter()
    })
