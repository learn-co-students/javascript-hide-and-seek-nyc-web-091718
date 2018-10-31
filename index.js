function getFirstSelector(selector) {
return document.querySelector(selector)
}

//----------------------------------------------->

function nestedTarget() {

return document.querySelector('#nested .target')

}

//----------------------------------------------->

function increaseRankBy(n) {

  const ranks = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  }
  return ranks
}

//----------------------------------------------->

function deepestChild() {

let x = document.querySelector('#grand-node div div div div')

return x
}
