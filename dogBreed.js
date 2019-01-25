/* eslint-disable no-console */
'use strict';
/*global $*/

function getDogImage(name) {
  fetch(`https://dog.ceo/api/breed/hound-${name}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(() => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  //replace the existing image with the new one
  const imgString = `<img src="${responseJson.message}" class="js-results-img">`;
  console.log(imgString);
  $('.js-breed-results-img').replaceWith(imgString);
  //display the results section
  $('.breed-results').removeClass('hidden');
}

function watchForm() {
  $('.breedForm').submit(event => {
    event.preventDefault();
    const breedType = $('.js-breed-image').val();
    getDogImage(breedType);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});