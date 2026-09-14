let sveta = (90 + 90 + 90) / 3
console.log(sveta, ' Sveta');

let dima = (90 + 90 + 90) / 3
console.log(dima, ' Dima');

let maxim = (90 + 90 + 90) / 3
console.log(maxim, ' Maxim');

switch(true) {
    case sveta > dima && sveta > maxim:
    console.log('Sveta win');
    break;
case dima > sveta && dima > maxim:
    console.log('Dima win');
    break;
     case maxim > dima && maxim > sveta:
    console.log('Maxim win');
    break; 
    default:
        console.log('Draw');
        break;
}