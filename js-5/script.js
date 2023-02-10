// let a=["a",7,true,false,NaN,undefined,null,45,55,1,false,NaN,undefined,5,1,4,7,8]
// console.log(a[a.length-1]) //verjin tivy tanalu arjeqn e
// console.log(a[0]) //arajin tivy
// let arr=[1,4,9,11,5,8,6,3,2,12]
// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     }
//
// }
// poxox
// arr.push(15) //verjic avelacnum e
// arr.pop() //verjic hanum e andam
// arr.unshift(14) //skbic avelacnum e
// arr.shift() //demic hanum e mek andam
// arr.reverse() zangvacy shur e talis hakarak
//    arr.splice(3,1) // jnjum e
//    arr.splice(3,1,"barev") poxum e
// let p=12
// arr.splice(arr.indexOf(p),1)
// let arr=[1,4,9,11,5,8,6,3,2,12]
// // chpoxox
//
// let x=arr.slice(2,7)
// const array2 = ['d', 'e', 'f'];
// const array3 = arr.concat(array2);
//
//
//
// let array2 = ['barev', 'vonces', 'Levon','jan'];
// array2=array2.join(' ')
// console.log(array2)


// let text="barev sireli hayenakicner, urax em tesnel dhez aystex"
// orinak 1
// let arrText=text.split(" ")
// arrText.shift()
// arrText.unshift("voghjuyn")
// arrText.reverse()
// arrText=arrText.join(" ")
// console.log(arrText)

// orinak 2
// let arrText=text.split(" ")
// arrText.splice(arrText.indexOf("hayenakicner,"),1,"Azgs")
// console.log(arrText)


// 100
// let n=prompt("nermuceq tivy")
// let res=[]
// for(let i=1;i<=n;i++){
//     if(i%2===0 && i%4===0){
//         res.push(i)
//     }
//
// }
// console.log(res)


// let res=[1, 5, 36,56, 7,4,
//     8,12,60,3,68,11,76,
//     80,9,88,7,44,48,96,20,13,28,100,
// ]

// let arr=[7,8,9,3]
// for (let i=0;i<arr.length;i++){
//     // arr.splice(arr.indexOf(arr[i]),1,arr[i]**2)
//     // arr[i]**=2
// }
// console.log(arr)
// 1. gtnel zangvaci amnamets arjeq@
// let max=res[0]//56
// for(let i=0;i<res.length;i++){
//     if(max<res[i]){
//         max=res[i]
//     }
//
// }
// console.log(max)
// 2. amenpoqr arjeqy
//

// 3. zangvacis miji kent tveri mijin tvabanakan@

//4.  arr=[1,"Barev ",'true',"Grish",false,"jan",5,4,2,3,"Vonces"]

// 1. unenq zangvac vercni miayn stringnery gracy ev sarqi text

// 2. vearadarcu indz nor zagvac vory klini miayn tverov [1,5,4,2,3]

// 3. tvery bardzdracnel asitichan [1,25,16,4,9]

let res = [1, 5, 36, 56, 7, 4,
    8, 12, 60, 3, 68, 11, 76,
    80, 9, 88, 7, "44", 48, 96, 20, 13, 28, 100]

let sum = 0;
let count = 0;
for (let i = 0; i <= res.length; i++) {
    if (res[i] % 2 === 1) {
        sum += res[i]
        count++
    }

}

console.log(sum/count)

// let n = 5; // row or column count
// // defining an empty string
// let string = "";
//
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//         string += "*";
//     }
//
//     string += "\n";
// }
//
// console.log(string);
// let n = 5;
// let string = "";
//
// for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//         if(i === 0 || i === n - 1) {
//             string += "*";
//         }
//         else {
//             if(j === 0 || j === n -1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//
//     string += "\n";
// }
//
// console.log(string);


// let res=[1, 5, 36,56, 7,4,
//     8,12,60,3,68,11,76,
//     80,9,88,7,"44",48,
//     96,20,13,28,100]
// let arr=[];
// let sum=0;
// let result=0;
// for (let i=0; i<= res.length; i++){
//     if(res[i]%2===1) {
//        arr.push(res[i])
//
//     }
//
// }

// result=sum/arr.length
// console.log(result)

arr = [1, "Barev ", 'true', "Grish", false, "jan", 5, 4, 2, 3, "Vonces"]