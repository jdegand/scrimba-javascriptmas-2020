/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
   ie Add classList of .buttonDisabled
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/

const container = document.querySelector('.container');
const counter = document.getElementById('counterFooter');
const btn = document.getElementById('btn');
const textArea = document.getElementById('string');
const h2 = document.querySelector('h2');

container.addEventListener('keydown', checkTextLength);
btn.addEventListener('click', send);

function checkTextLength(){
  //console.log(textArea.value.length);
  btn.addEventListener('click', send);
  btn.classList.remove('buttonDisabled');

  counter.style.color = 'white';
  counter.innerText = `${textArea.value.length} / 140`;
  if(textArea.value.length > 119){
    counter.style.color = 'red';
  }

  if(textArea.value.length > 140){
    btn.classList.add('buttonDisabled');
    btn.removeEventListener('click', send);
    counter.innerText = `-${textArea.value.length-140} / 140`;
  }
}

function send(){
  //api call here
  alert('sent')
  textArea.value = '';
  counter.innerText = '0 / 140';
  counter.style.color = 'white';
}
