/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.
var grille = [];

for (var i = 0; i < H; i++) {
    var LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    grille[i] = LINE.split(' '); 
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];

    switch(parseInt(grille[YI][XI])) {
        case 1:
        case 3:
        case 7:
        case 8:
        case 9:
        case 12:
        case 13:
            YI++;
          break;
        case 2:
        case 6:
            if(POS=='LEFT'){
                XI++;
            }else{
                XI--;
            }
            break;
        case 4:
            if(POS == 'TOP'){
                XI--;
            }else{
                YI++;
            }
            break;
        case 5:
            if(POS == 'TOP'){
                XI++;
            }else{
                YI++;
            }
            break;
        case 10:
            XI--;
            break;
        case 11: 
            XI++;
            break;
        default: 
            print('ERREUR');
        
    }
    print(XI+" "+YI);
}