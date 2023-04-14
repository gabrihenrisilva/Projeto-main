
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    const newLocal = document.getElementsByClassName('animals');
    let x = newLocal;
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                
        }
    }
}