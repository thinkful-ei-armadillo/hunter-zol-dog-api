/* eslint-disable no-console */
'use strict';
/*global $*/

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(() => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  //replace the existing image with the new one
  const imgString = responseJson.message.map(link => `<img src="${link}" class="js-results-img">`).join('');
  console.log(imgString);
  $('.js-results-img').replaceWith(imgString);

  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('.numForm').submit(event => {
    event.preventDefault();
    const imgNum = $('.js-image-number').val();
    getDogImage(imgNum);
  });
}

function getDogBreedImage(name) {
  fetch(`https://dog.ceo/api/breed/hound-${name}/images/random`)
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
}

function displayBreedResults(responseJson) {
  //replace the existing image with the new one
  const imgString = `<img src="${responseJson.message}" class="js-results-img">`;
  console.log(imgString);
  $('.js-results-img').replaceWith(imgString);
  //display the results section
  $('.results').removeClass('hidden');
}

function watchBreedForm() {
  $('.breedForm').submit(event => {
    event.preventDefault();
    const breedType = $('.js-breed-image').val();
    getDogBreedImage(breedType);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchBreedForm();
});

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});