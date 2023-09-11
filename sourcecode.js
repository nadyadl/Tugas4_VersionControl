let arr = []
for (let index = 0; index < 100; index++) {
    arr.push(Math.round((Math.random()* 100)) + 1)
}
console.log("100 nilai random")
console.log


let arr_genap = []
let_arr_ganjil =[]
for (let index = 0; index < arr.length; index++) {
    if (index % 2 == 0) {
        arr_genap.push(arr[index])
    } else {
        arr_ganjil.push(arr[index])
    }
}
console.log("array genap")
console.log(arr_genap)
console.log("array ganjil")
console.log(arr_ganjil)



function findMax(arr) {
    let max = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (max < arr[index])
            max = arr[index]
        }
    return max
}   
   

function findMin(arr) {
    let min = arr[0]
    for (let index = 0; index < arr.length; index++) {
   
        if (min > arr [index]){
            min = arr[index]
        }   
    } 
    return min     
} 


console.log("Array Genap")
max_arr_genap = findMax(arr_genap)
min_arr_genap = findMin(arr_genap)
console.log(max_arr_genap)
console.log(min_arr_genap)

console.log("Array Ganjil")
max_arr_ganjil = findMax(arr_ganjil)
min_arr_ganjil = findMin(arr_ganjil)
console.log(max_arr_ganjil)
console.log(min_arr_ganjil)


function total(arr) {
    let total = 0
    for (let index = 0; index < arr.length; index++){
        total += arr[index]
    }
    return total    
}
console.log("Array Genap")
total_arr_genap = total (arr_genap)
rata_arr_genap = total_arr_genap / arr_genap.length
console.log(total_arr_genap)
console.log(rata_arr_genap)

console.log("Array Ganjil")
total_arr_ganjil = total (arr_ganjil)
rata_arr_ganjil = total_arr_ganjil / arr_ganjil.length
console.log(total_arr_ganjil)
console.log(rata_arr_ganjil)


if(max_arr_ganjil == max_arr_genap){
    console.log("Max pada kedua nilai sama")
}else if (min_arr_ganjil > max_arr_genap){
    console.log("Max ganjil lebih besar")
}else if (max_arr_ganjil < min_arr_genap){
    console.log("Max genap lebih besar")
}

if(min_arr_ganjil == min_arr_genap){
    console.log("min pada kedua nilai sama")
}else if (min_arr_ganjil > min_arr_genap){
    console.log("min ganjil lebih besar")
}else if (min_arr_ganjil < min_arr_genap){
    console.log("min genap lebih besar")
}

if(total_arr_ganjil == total_arr_genap){
    console.log("total pada kedua nilai sama")
}else if (total_arr_ganjil > total_arr_genap){
    console.log("total ganjil lebih besar")
}else if (total_arr_ganjil < total_arr_genap){
    console.log("total genap lebih besar")
}

if(rata_arr_ganjil == rata_arr_genap){
    console.log("rata pada kedua nilai sama")
}else if (rata_arr_ganjil > rata_arr_genap){
    console.log("rata ganjil lebih besar")
}else if (rata_arr_ganjil < rata_arr_genap){
    console.log("rata genap lebih besar")
}





   
