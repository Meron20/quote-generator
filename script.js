 // Variables

 let btn = document.querySelector('#new-quote');
 let quote = document.querySelector('.quote');
 let person = document.querySelector('.person');

 const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    
    person: `Mahtam Gandi`

 }, {

    quote: `"I do the very best how - the very best I can; and I mean to keep on doing so until the end."`,
    
    person: `Abraham Lincoln`


 }, {

    quote: `"If you want live a happy life, tie it to a goal, not to people or things."`,
    
    person: `Albert Einsitein`

 }, {
    quote: `"At his best man is the nobelst of all animals ; separated from law and justice he is the worst."`,
    
    person: `Aristotle`
 }, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    
    person: `Steve Jobs`
 }, {

  quote: `"Tell me and I fotget. Teach me and I remeber. Involve me and I learn."`,
    
  person: `Benjamin Frankllin`

 }, {

    quote: `"If you look at what you have in life, you 'll always have more . If you look at what you don't have in life, you'll never have enough."`,
    
    person: `Oprah Winfrey`

 }, ];

 btn .addEventListener('click' , function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
 })



