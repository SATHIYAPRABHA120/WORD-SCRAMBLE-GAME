const words = [
    {
        word : "addition",
        hint : "The process of adding numbers"
    },
    {
        word : "meeting",
        hint : "Event in which people come together"
    },
    {
        word : "microphone",
        hint : "A device that amplifies sound"
    },
    {
        word : "fright",
        hint : "An intense feeling of fear"
    },
    {
        word : "canvas",
        hint : "Piece of fabric for oil painting"
    },
    {
        word : "garden",
        hint : "A place to grow flowers and plants"
    },
    {
        word : "friend",
        hint : "Person other than a family member"
    },
    {
        word : "vacation",
        hint : "A Break from work or school"
    },
    {
        word : "mattress",
        hint : "A piece of furniture for sitting"
    },
    {
        word : "teacher",
        hint : "Someone who teaches"
    },
    {
        word : "computer",
        hint : "An electronic device for processing data"
    },
    {
        word : "diamond",
        hint : "A precious stone,often used in jewelry"
    },
    {
        word : "cosmic",
        hint : "Related to space and the universe"
    },
    {
        word : "concert",
        hint : "A musical performance"
    },{
        word : "library",
        hint : "A place with many books"
    },{
        word : "belt",
        hint : "A narrow piece of leather or fabric worn around the waist"
    },
    {
        word : "television",
        hint : "A device used to watch shows and movies"
    },
    {
        word : "adventure",
        hint : "Exploring new experiences"
    },
    {
        word : "conference",
        hint : "A formal meeting or discussion"
    },
    {
        word : "ceremony",
        hint : "An event to honor or celebrate something"
    }
]

const wordText = document.querySelector(".word")
const hintText = document.querySelector(".hint span")
const timeText = document.querySelector(".time b")
const inputfield = document.querySelector("input")
const refreshBtn = document.querySelector(".refresh-word")
const checkBtn = document.querySelector(".check-word")

let correctword
let timer;

const initTimer = maxTime =>{
    clearInterval(timer)
    timer = setInterval(() =>{
        if(maxTime > 0){
            maxTime--
            return timeText.innerHTML = maxTime
        }
        clearInterval(timer)
        alert(`Time's up! ${correctword.toUpperCase()} was the correct word`)
        initGame();
    },1000)
}

const initGame = () =>{
    initTimer(30)//calling the initTimer function
    let randomObj = words[Math.floor(Math.random() * words.length)]//getting random oject from words
    let wordArray = randomObj.word.split("")//splitting each letter of that random object word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];//shuffling
    }
    wordText.innerHTML = wordArray.join("")//passing the shuffled word as word text
    hintText.innerHTML = randomObj.hint//passing random object hint as hinttext
    correctword = randomObj.word.toLowerCase()
    inputfield.value = ""
    inputfield.setAttribute("maxlength",correctword.length)//setting the length of the word
    console.log(randomObj)
}

initGame();

const checkword = () => {
    const userWord = inputfield.value.toLocaleLowerCase()
    if(!userWord) return alert(`Please Enter a Word`)
    if(userWord !== correctword) return alert(`Oops! ${userWord} is not a correct word`)
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`)
     
    initGame()
}

refreshBtn.addEventListener("click",initGame)
checkBtn.addEventListener("click",checkword)