//const { is } = require("jsdom/lib/jsdom/living/generated/Blob");

// the timer increment every second once the page has loaded.
let counter = document.getElementById ("counter");
let count = 0;
let interval = setInterval(() => {
    counter.innerText = ++count;
}, 1000);

//Manually increment and decrement the counter using the plus and minus buttons.

document.getElementById("plus").addEventListener( "click",()=>{
    counter.innerText = ++count;
});

document.getElementById("minus").addEventListener("click", () =>{
    counter.innerText = --count;
});

//"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

const likeList = document.querySelector(".likes");
const likeCounts = {};

document.getElementById("heart").addEventListener("click" , () =>{
const num = counter.innerText;
likeCounts[num] = (likeCounts[num] || 0) + 1;

const existingLike =document.getElementById(`like-${num}`);
if (existingLike){
    existingLike.innerText= `Number ${num} has been liked ${likeCounts[num]} time`;
} else {
    const li = document.createElement("li");
    li.id = `like-${num}`;
    li.innerText =`Number ${num} has been liked 1 time`;
    likeList.appendChild(li);
}
})

// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"

let isPaused = false;

document.getElementById("pause").addEventListener("click", () =>{
    if (isPaused){
        interval = setInterval(() => {
            counter.innerText = ++count;
        }, 1000);
        document.getElementById("pause").innerText = "pause";
    } else {
        clearInterval(interval);
        document.getElementById("pause").innerText = "resume";
    }

    isPaused = !isPaused;

});

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."

const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const comment = commentInput.value;

    const p = document.createElement("p");
    p.innerText = comment;
    commentList.appendChild(p);
    commentInput.value = "" // clear input

})