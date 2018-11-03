function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let childNode = node.children[0];

  while (childNode) {
    debugger
    node = childNode;
    childNode = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
  }
  return ranks;
}
