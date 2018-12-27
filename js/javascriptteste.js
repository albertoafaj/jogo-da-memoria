const listAlt = ["card01", "card01", "card02", "card02", "card03", "card03",
  "card04", "card04", "card05", "card05", "card06", "card06",
  "card07", "card07", "card08", "card08"
];

const listFiguras = ['<i class="fas fa-fish card"></i>',
'<i class="fas fa-fish card"></i>',
'<i class="fas fa-spider card"></i>',
'<i class="fas fa-spider card"></i>',
'<i class="fas fa-cat card"></i>',
'<i class="fas fa-cat card"></i>',
'<i class="fas fa-dog card"></i>',
'<i class="fas fa-dog card"></i>',
'<i class="fas fa-crow card"></i>',
'<i class="fas fa-crow card"></i>',
'<i class="fas fa-dove card"></i>',
'<i class="fas fa-dove card"></i>',
'<i class="fas fa-frog card"></i>',
'<i class="fas fa-frog card"></i>',
'<i class="fas fa-horse card"></i>',
'<i class="fas fa-horse card"></i>'];

let newListAlt = [];
let numAleatorio = 0;
let teste = 0;
for (var i = 0; i < listAlt.length; ) {
  numAleatorio = Math.floor(Math.random() * listAlt.length);
  // console.log(numAleatorio);
  teste = newListAlt.includes(numAleatorio,);
  // console.log(teste);
  if (teste === false) {
    newListAlt.push(numAleatorio);
    i++;
    }
};
console.log(newListAlt);
console.log(listAlt[newListAlt[0]]);
console.log(listFiguras[newListAlt[0]]);
