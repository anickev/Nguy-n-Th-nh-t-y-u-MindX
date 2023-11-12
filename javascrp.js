
// bai1
let i = 1 
let space = ''
 while(i <=6){
    let j = 1
 while(j<= 6-i){ 
      space = space + " "
    j = j+1
  }
   let k = 1
   while(k<=i){
       space = space + "1 "
     k = k+1
   }
   i = i+1; space = space +  "\n"
}
 console.log(space)

// bai2
let myarr=["9","7","9","0","7","8","387","123","456"]
for(values of myarr){
 if(values % 2 == 0){
   console.log(values)
 }
}
// bai 3
let value1 = window.prompt("ban an com chua?", "your answer")
let value2 = window.prompt("ban an com voi gi?", "your answer")
let value3 = window.prompt("ban bao nhieu tuoi?", "your answer")
let value4 = window.prompt("ban song o dau?", "your answer")
let value5 = window.prompt("ban lam nghe gi?", "your answer")
let myanswer=[value1,value2,value3,value4,value5];
console.log(myanswer)

