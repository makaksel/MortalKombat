const hero1 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['мечь'],
    attack() {
        console.log(this.name + ' ' + 'Fight...')
    }
}

const hero2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['мечь'],
    attack() {
        console.log(this.name + ' ' + 'Fight...')
    }
}



const createPlayer = (player, hero) => {
    const $arenas = document.querySelector('.arenas')
    const $player = document.createElement('div');
    const $progressbar = document.createElement("div")
    const $character = document.createElement("div")
    const $life = document.createElement("div")
    const $name = document.createElement("div")
    const $img = document.createElement("img")

    $player.classList.add(player)
    $progressbar.classList.add("progressbar")
    $character.classList.add("character")

    $life.classList.add("life")
    $life.style.width = "100%"

    $name.classList.add("name")
    $name.innerText = hero.name

    $img.src = hero.img


    $progressbar.append($life)
    $progressbar.append($name)
    $character.append($img)

    $player.append($progressbar)
    $player.append($character)

    $arenas.append($player)

}

createPlayer("player1", hero1)
createPlayer("player2", hero2)