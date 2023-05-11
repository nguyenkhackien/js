const cardsArray = [
    {
        name: "fire",
        img: "img/fire.png",
    },
    {
        name: "youtube",
        img: "img/youtube.png",
    },
    {
        name: "flash",
        img: "img/flash.png",
    },
    {
        name: "gift",
        img: "img/gift.png",
    },
    {
        name: "tron",
        img: "img/tron.png",
    },
    {
        name: "ufo",
        img: "img/ufo.png",
    },
    {
        name: "plant",
        img: "img/plant.png",
    },
    {
        name: "burger",
        img: "img/burger.png",
    },
]
function generateCard() {
    grid.innerHTML = ""
    const cardsArrayMerge = cardsArray
        .concat(cardsArray)
        .sort(() => 0.5 - Math.random())
    cardsArrayMerge.forEach((item) => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.dataset.name = item.name
        const front = document.createElement("div")
        front.classList.add("front")

        const back = document.createElement("div")
        back.classList.add("back")
        back.style.backgroundImage = `url(${item.img})`
        card.appendChild(front)
        card.appendChild(back)
        grid.appendChild(card)
    })
}

function matchingCard() {
    const selects = document.querySelectorAll(".selected")
    ;[...selects].forEach((item) => item.classList.add("matched"))
}

function checkWin() {
    let flag = true;
    const selects = document.querySelectorAll( ".card" )
    ;[...selects].forEach((item) => {
        if (item.classList.contains("matched")===false) {
            flag = false
        }
    })
    return flag
}

let previousCard
let firstGuess = ""
let secondsGuess = ""
let count = 0
const grid = document.querySelector(".grid")

generateCard()

grid.addEventListener("click", (event) => {
    const clicked = event.target
    if (
        clicked.matches(".front") &&
        !clicked.parentNode.classList.contains("selected")
    ) {
        clicked.parentNode.classList.add("selected")
        if (count === 0) {
            firstGuess = clicked.parentNode.dataset.name
            previousCard = clicked
            count = (count + 1) % 3
        } else if (count === 1) {
            secondsGuess = clicked.parentNode.dataset.name
            count = (count + 1) % 3
        }
        if (count === 2) {
            if (firstGuess === secondsGuess) {
                console.log("chinh xac")
                setTimeout(matchingCard, 200)
            } else {
                console.log("sai roi")
                setTimeout(function () {
                    previousCard.parentNode.classList.remove("selected")
                    clicked.parentNode.classList.remove("selected")
                }, 500)
            }
            firstGuess = ""
            secondsGuess = ""
            count = (count + 1) % 3
        }
    }
    if (checkWin()) {
        console.log("win")
        generateCard()
    }
})
