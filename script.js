const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const replyEl = document.getElementById('reply');
const refreshEl = document.getElementById('refresh');

const replies = ["YES 😍", "Am afraid not 😔", "MAYBE 🤷‍♂️🤷‍♀️", "HAHA! Your question is funny 🤣🤣", "Sorry, Ball is asleep. Try again later"]


let randomNumber = Math.floor(Math.random() * replies.length)

let reply = '';


const theReply = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      reply = replies[randomNumber]
      resolve(reply);
},3000)
  })
}
        
const me = async () => {
  replyEl.innerHTML = "summoning the godess of truth...";
  const reply2 = await theReply();
  if(inputEl.value) {
    replyEl.innerHTML = reply2;
    button.style.visibility = "hidden"
    refreshEl.innerHTML = "Please Refresh The page for a new question"
  } else {
    replyEl.innerHTML = "please input a question, don't get cursed!!";
  }
  
  reset();
}

btnEl.addEventListener('click', me)


const reset = () => {
  inputEl.value = '';
}


      