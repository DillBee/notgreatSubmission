const fs = require('fs');

function inNew() {
    fs.readFile('notgreatSubmission/numbers.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data)
        var numarray = data.split(',')
        let inorder = false

        numarray = removeDUPLICATS(numarray)

        while(!inorder){
            numarray = bubblesort(numarray)
            inorder = is_it_in_order(numarray)
            console.log(numarray)
        }
            
        console.log("The numbers are in order.", numarray)
      });
}

function bubblesort(array) {
    for (var i = 0; i < array.length; i++) {
        var j = i+1
        if (parseInt(array[i]) > parseInt(array[j])){
            var valueone = array[i]
            var valuetwo = array[j]
            array[i] = valuetwo
            array[j] = valueone
        }
    }
    console.log("Sorted ", array)
    return array
}


function removeDUPLICATS(array) {
    let newarray = []
    for (var i = 0; i < array.length; i++) {
        if (!newarray.includes(array[i])){
            newarray.push(array[i])
        }
    }
    console.log("Dupes removed")
    console.log(newarray)
    return newarray
}


function is_it_in_order(array) {
    var comparitor = array[0]
    for (var i = 1; i < array.length; i++) {
        if (parseInt(array[i]) < parseInt(comparitor)){
            return false
            }
        comparitor = array[i]
    }
    return true
}

//copied from stack overflow :D
function Shufflearray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


inNew()