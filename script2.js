function reversal(){
    var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var array2 = [];

    for(var i = 0; i < array1.length; i++){
        array2.unshift(array1[i]);
    }

    console.log(array2);
}

reversal();