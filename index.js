// Variables

let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

const fetchQuote = () => {
  fetch('https://type.fit/api/quotes')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randomNum = Math.floor(Math.random() * data.length);
      document.querySelector('.quote').innerText = data[randomNum].text;
      document.querySelector('.person').innerText = data[randomNum].author;
    });
};

btn.addEventListener('click', () => {
  //   document.querySelector('.quote').innerText = '';
  //   document.querySelector('.person').innerText = '';
  fetchQuote();
});
