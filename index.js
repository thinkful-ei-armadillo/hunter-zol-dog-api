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
  const imgString = responseJson.message.map(link => `<img src="${link}" class="results-img">`).join('');
  console.log(imgString);
  $('.js-results-img').replaceWith(imgString);

  //display the results section
  $('.results').removeClass('hidden');
  $('.breed-results').addClass('hidden');
}

function watchForm() {
  $('.numForm').submit(event => {
    event.preventDefault();
    const imgNum = $('.js-image-number').val();
    getDogImage(imgNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});