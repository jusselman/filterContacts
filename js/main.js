
// Get input element //
let filterInput = document.getElementById('filterInput');
// Add event listener //
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // get names ul //
  let ul = document.getElementById('names');
  //  get items //
  let li = ul.querySelectorAll('li.collection-item');
  // loop through collection li's //
  for(i=0; i<li.length;i++) {
    let a = li[i].getElementsByTagName('a')[0];
    // if matched //
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    }  else  {
      li[i].style.display = 'none';

    }

  }
}
