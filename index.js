'use strict';
/*global $*/

function getDogImage(num) {
    console.log(num);
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  const imgString = responseJson.message.map(link => `<img src="${link}" class="results-img">`).join('');
  console.log(imgString);
  $('.js-results-img').append(imgString);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const imgNum = $('.js-image-number').val();
    console.log(imgNum);
    getDogImage(imgNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});