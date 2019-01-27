/* eslint-disable no-console */
'use strict';
/*global $*/

function getDogImage(value) {
  console.log(typeof value);
  if (typeof value === 'string'){
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'success') {
          displayBreedResults(responseJson);
        }
        else {
          $('.js-results-img').replaceWith('<p>Not a breed in the inventory</p>');
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

function displayResults(responseJson) {
  //replace the existing image with the new one
  console.log(responseJson.message);
  const imgString = responseJson.message.map(link => `<img src="${link}" class="js-results-img">`).join('');
  console.log(imgString);
  $('.js-results').html(imgString);
}

function watchForm() {
  $('.numForm').submit(event => {
    event.preventDefault();
    const imgNum = parseInt($('.js-image-number').val());
    $('.js-image-number').val('');
    getDogImage(imgNum);
  });
}


function displayBreedResults(responseJson) {
  //replace the existing image with the new one
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