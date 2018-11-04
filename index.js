function getFirstSelector(selector) {
  const main = document.getElementById('app');
  return main.querySelector(`${selector}`)
}

function nestedTarget() {
  const div = document.getElementById('nested');
  return div.querySelector('.target');
}

function deepestChild() {
  const div = document.getElementById('grand-node')
  return div.querySelector('div>div>div>div>div');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
      let childArray = rankedLists[i].children;
      for (let i = 0; i < childArray.length; i++) {
          let newNum = parseInt(childArray[i].innerHTML) + n;
          childArray[i].innerHTML = newNum.toString();
        }
      }
}
