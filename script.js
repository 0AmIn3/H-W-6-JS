let arr = [1, 2, 3, 4, 6, -1 , -3 , -2]

function sumPlus(sum) {
    return sum.filter(i => i).map(i => x += i, x = 0).reverse()[0]
}

console.log(
    sumPlus(arr)
)


////////////////////////////////////////////////////////////////////////////




let arr2 = ['kumush', 'xusen', 'amir', 'amin', 'shox', 'xojakbar', 'zarina', 'artom', 'muxammadshox']

let name = prompt('What is ur name?')

if (arr2.includes(name)) {
    arr2.splice(arr2.indexOf(name) , 1 )
    console.log(arr2)
}
else {
    console.log("No such name")
}




////////////////////////////////////////////////////////////////////////////




let arr3 = [1 ,2 , false , 'hello' , 24 , 'world' , undefined , null , 'error' , 22 , 5 , 45]

if(arr3.filter(Number).length > 5 ){
    console.log('good')
}
else{
    console.log('not good')
}