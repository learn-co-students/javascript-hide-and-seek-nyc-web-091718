function getFirstSelector(selector){
  var el = document.querySelector(selector);
  return el;
}

function nestedTarget(){
  const nestedTarget = document.querySelector('#nested div.target')
  return nestedTarget;
}

  function increaseRankBy(n){
    // console.log(rank)
    const rank = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

    for (let i = 0; i < rank.length; i++) {
      rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
    }//rank[i]= <li>1</li>
  }//end of func


function deepestChild(){
let nestedDiv = document.getElementById('grand-node')//node list
  let nestedDivChildrenNode = nestedDiv.children[0]
  //takes divs out of 'html collection'

    while (nestedDivChildrenNode) {
      nestedDiv = nestedDivChildrenNode;
      nestedDivChildrenNode = nestedDiv.children[0];
    }

    return nestedDiv;
}
