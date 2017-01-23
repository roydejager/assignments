// const list = [2, 6, 7, 9, 1, 3, 0, 10, 4, 8]
// const sortedList = []

// // console.log(list.sort())

// function sortList() {
// let smallest = list[0]

//     while (list.length) {
//         for (let i = 0; i < list.length; i++) {
//             if (smallest >= list[i]) {
//                 smallest = list[i]
//             } 
//         }
//         sortedList.push(smallest)
//         list.splice(list.indexOf(smallest), 1)
//         smallest = list[0]
//     }
// }

// sortList()





function determineLowest(list, lowest) {
    const min = Math.min.apply(Math,list)
   
    addToList(min)
    removeFromList(list, min)
    
    let f = list
    f = list
    console.log(list)
}


function addToList(lowest) {
    const newList = []

    newList.push(lowest)
    console.log(newList)
}

function removeFromList(list, lowest) {
    return list.splice(list.indexOf(lowest), 1)
}


determineLowest([2, 6, 7, 9, 1, 3, 0, 10, 4, 8] )