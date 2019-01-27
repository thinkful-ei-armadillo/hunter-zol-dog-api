'use strict';
/*global $*/

function getDogImage(value) {
  if (typeof value === 'string'){
    fetch(`https://dog.ceo/api/breed/${value}/images/random`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'success') {
          displayBreedResults(responseJson);
        }
        else {
          $('.js-results').append('<p>Not a breed in the inventory</p>');
        }
      })
      .catch(() => alert('Something went wrong. Try again later.'));
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${value.toString()}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(() => alert('Something went wrong. Try again later.'));
  }
}

// ========display from 1 to 50 random images =========
function displayResults(responseJson) {
  console.log(responseJson.message);
  const imgString = responseJson.message.map(link => `<img src="${link}" class="js-results-img">`).join('');
  console.log(imgString);
  $('.js-results').append(imgString);
}

function watchForm() {
  $('.numForm').submit(event => {
    event.preventDefault();
    const imgNum = parseInt($('.js-image-number').val());
    $('.js-image-number').val('');
    getDogImage(imgNum);
  });
}


// ========random image from breed list ========
function displayBreedResults(responseJson) {
  const imgString = `<img src="${responseJson.message}" class="js-results-img">`;
  console.log(imgString);
  $('.js-results').html(imgString);
}

function watchBreedForm() {
  $('.breedForm').submit(event => {
    event.preventDefault();
    const breedType = $('.js-breed-image').val();
    $('.js-breed-image').val();
    getDogImage(breedType);
  });
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  watchBreedForm();
});