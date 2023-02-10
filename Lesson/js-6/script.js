// let arr=[1,5,6,9,-4,-8,-3,-7,-1,11,25,4,7,3,-25]
// let l=[]
//
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0 && arr[i]!==0){
//         l.push(arr[i])
//     }
//
//
// }
// console.log(l)
// let l=0
//
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         l=l+arr[i]
//     }
//
// }
// console.log(l)


// let arr=[1,5,6,9,-4,-8,-3,-7,-1,11,25,4,7,3,-25]
// let count=[0,0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//        // count[0]+=1
//        // count[0]=count[0]+1
//        count[0]++
//     }else{
//         count[1]+=1
//     }
// }
// console.log(count)
// let arr=[10,5,6,9,-4,-8,-3,-7,-1,11,25,4,7,3,-25]
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//
//     }
// }
// console.log(max)
// debugger
// let min = arr[0]
// for(let i =0;i<arr.length;i++){
//  if(arr[i]<min){
//      min=arr[i]
//  }
// }
// console.log(min)
// let arr=[10,5,6,9,-4,-8,-3,-7,-1,11,25,4,7,3,-25]
// minmax=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0 && minmax>arr[i] ){
//         minmax=arr[i]
//     }
// }
// console.log(minmax)
// let x="barev levon jan"
//     let y=x.includes("levon")
// console.log(y)
// let newarr=[1,2,3,4,5,6,7,4,1,2,5,6,9,87,14,87,21,41,12]
// let x=[]
// for(let i=0;i<newarr.length;i++){
//     if(!x.includes(newarr[i])){
//         x.push(newarr[i])
//     }
// }
// console.log(x)
// let newarr=[1,2,3,4,5,"6",7,undefined,4,1,NaN,2,5,null,6,9,true,87,14, false,87,21,41,12]
// let y=[]
// for (let i=0;i<newarr.length;i++){
//     if(typeof newarr[i]==='number' && !isNaN(newarr[i])){
//         y.push(newarr[i])
//     }
//
// }
// console.log(y)
// let newarr=[1,2,3,4,5,"6",7,undefined,4,1,NaN,2,5,null,6,9,true,87,14,
//     false,87,21,41,12]
//
// for(let i=0;i<newarr.length;i++){
//     if(typeof newarr[i]!='number' || isNaN(newarr[i])){
//         newarr.splice(i,1,0)
//         // newarr[i]=0
//     }
// }
// console.log(newarr)

// let arr=[1,2,3,4,5,[6,7,8,9],[10,11,12,[13,14]]]
// arr=arr.flat(Infinity)
//
// console.log(arr)

// let arr=[[],[]]
// arr[0].push(7)
// arr[1].push(17)
// arr=arr.flat(Infinity)
// console.log(arr)


//2. unenal meki 100 mijakayq
// ete tivy bajanvum e 3 tpi "buzzz"
// ete tivy bajanvum e 5 tpi "fizz"
// ete tvery bajanvum en ham 3 i ham 5 i tpi "fizzbizz"🙌

// 3. unenal 3 prompt mekum nshum enq te
// vorqan gumar enq cankanum
// muysum qani tarov
// enmyusum qani %
// hashvi minch nshvac tarva vcharveliq gumary ev tokosy

// 4. popoxakaneri texy poxel mi hushm + - kmejy a=7 b=5 //a=5 b=7

// tnayin
//  arr=   [1,"Barev ",'true',"Grish",false,"jan",5,4,2,3,"Vonces"]
// arr.join(" ")
//1. unenq zangvac vercni niayn textavoy gracy ev sarqi text

// 2. vearadarcu indz nor zagvac vory klini miayn tverov [1,5,4,2,3]

// 3. tvery bardzdracnel asitichan veradarcni maqur tver [1,25,16,4,9]






//  arr=  [1,"Barev ",'true',"Grish",false,"jan",5,4,2,3,"Vonces"]
//
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]!=='number' && arr[i]!==false){
//         console.log(arr[i])
//     }
// }

// arr=  [1,"Barev ",'true',"Grish",false,"jan",5,4,2,3,"Vonces"]
// let y=[]
// for(let i=0;i<arr.length;i++){
//     if(typeof arr[i]=="number" )
//         y.push(arr[i])
// }
// console.log(y)



// arr=  [1,25,16,4,9]
// y=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]){
//
//         y.push(arr[i]=arr[i]**2)
//
//     }
// }
// console.log(y)


//2. unenal meki 100 mijakayq
// ete tivy bajanvum e 3 tpi "buzzz"
// ete tivy bajanvum e 5 tpi "fizz"
// ete tvery bajanvum en ham 3 i ham 5 i tpi "fizzbizz"🙌


let arr = [];
let n=prompt("nermuceq tiv")
for(let i=0 ; i < 100; i++)
{
   if(i % 3 === 0 && i % 5 === 0){
       alert(bizz)
   }


}





