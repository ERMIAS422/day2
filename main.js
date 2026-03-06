let quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Discipline is choosing between what you want now and what you want most.",
  "Never give up on something you really want. It is difficult to wait, but worse to regret.",
  "Small progress each day adds up to big results.",
  "Dream big, start small, but most importantly start.",
  "Your future is created by what you do today, not tomorrow.",
  "Hard work beats talent when talent does not work hard.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "If you want something you never had, you must be willing to do something you have never done.",
  "Great things never come from comfort zones.",
  "Push yourself because no one else is going to do it for you.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Do something today that your future self will thank you for.",
  "Opportunities don't happen, you create them.",
  "Don't stop when you are tired. Stop when you are done.",
  "The harder you work for something, the greater you will feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Don't wait for opportunity. Create it.",
  "Sometimes we are tested not to show our weaknesses, but to discover our strengths.",
  "Do what you can with all you have, wherever you are.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Believe you can and you're halfway there.",
  "Start where you are. Use what you have. Do what you can.",
  "The best way to predict the future is to create it.",
  "Everything you can imagine is real.",
  "It always seems impossible until it's done.",
  "Your limitation—it's only your imagination."
]

let p = document.getElementById("p")
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
  
  let randomIndex = Math.floor(Math.random() * quotes.length)
  
  p.textContent = quotes[randomIndex]
  
})