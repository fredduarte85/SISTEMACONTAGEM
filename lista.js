let numeroAlunos = 5;

let listaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo"];

for (let contador = 0; contador < listaAlunos.length; contador++) {
   // console.log(contador)

   if (contador == 0) {
      console.log(contador + ": ZERO :" + listaAlunos[contador]); //CONCATENAÇÃO
   } else if (contador % 2 == 1) {
      console.log(`${contador}: ÍMPAR : ${listaAlunos[contador]}`); // INTERPOLAÇÃO - TEMPLATE STRINGS
   } else {
      console.log(`${contador}: PAR : ${listaAlunos[contador]}`);
   }
}