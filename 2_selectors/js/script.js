console.log('You are at ' + window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('Что хотите записать на странице?')

byId.innerHTML = quest;
// byTag.innerHTML = '<h2>Hello im id div</h2>'; No working
firstBySelector.innerHTML = '<h2>Hello im first with div</h2>';