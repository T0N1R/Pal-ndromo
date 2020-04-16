
function palindromo(palabra){
    let texto = palabra.toLowerCase();
    let reverso = texto.split("").reverse().join("");
    console.log(texto);
    console.log(reverso);

    for (i = 0; i < texto.length; i++){
        if (texto[i] != reverso[i]){
            return false
        }
    }
    return true
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question('Ingresa palabra: ', (palabra) => {
    if (palindromo(palabra) == true){
        console.log("es palindromo");
    } else {
        console.log("no es palindromo");
    }
    readline.close()
  })
  

