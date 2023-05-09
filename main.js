// Assegno ad una costante l'elemento padre
const squareElement = document.getElementById("square");
console.log(squareElement);

// Creo un array di numeri in range 1 / 100 ordinati
const arrayCaselle = creaArrayNumeriOrdinati(1, 100);
console.log(arrayCaselle);

// Utilizzo il ciclo for per creare tutte le caselle
for (let i = 0; i < 100; i++){

    // Eseguo la funzione creaCaselleSquare tante volte quante caselle voglio creare
    const newCaselle = creaCaselleSquare("div", "casella");

    // Creo una funzione che aggiunga la classe "clicked" 
    // alla casella quando cliccata
    newCaselle.addEventListener("click", 
        function(){
            this.classList.add("clicked");
        }
    );

    // Appendo all'elemento padre le caselle create dalla funzione
    squareElement.append(newCaselle);
}







// FUNZIONI

// Creo una funzione che crei le caselle
function creaCaselleSquare(tagType, classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}

// Creo la funzione che riempie l'array vuoto
function creaArrayNumeriOrdinati(min, max){
    
    const arrayInterno = [];

    // creare numero 
    while (arrayInterno.lenght < max){
        
        arrayInterno.push([i]);
    
    }
    
    return arrayInterno;
}

function numeroMinMax(){

}