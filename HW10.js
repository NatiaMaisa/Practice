// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n)
// და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function nums(m, n) {
  if (m > n) {
    return m;
  } else if (m == n) {
    return 0;
  } else return n;
}
console.log(nums(5, 5));

// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function numbers(a, b) {
  return a * b;
}
console.log(numbers(2, 4));

// 3.დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function fullName() {
  console.log("Natia Maisuradze");
}
fullName();

// 4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname
//დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function printfullname(firstname, lastname) {
  return firstname + lastname;
}
console.log(printfullname("Natia", " Maisuradze"));

// 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დ
//ააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3
//ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება
//ფუნქციის შიგნით
//რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)

function number(n) {
  let multiplication = 1;
  for (let i = 1; i <= n; i++) {
    multiplication *= i;
  }
  return multiplication;
}
console.log(number(3));
// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს 
//შემდეგი properties: firstname, lastname, age, marks 
//(scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და 
//მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს 
//( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 

//6. დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)


let student = {
  firstname: "Natia",
  lastname: "Maisuradze",
  age: 30,
  scores: [4, 7, 5, 3, 2],
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(student.fullname());

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება 
//( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

function totalscores(scores){
    let sum=0;
    for (let i=0; i<scores.length; i++){
        sum+=scores[i]
    }
    return sum;
}
let total=totalscores(student.scores);
console.log ("Total score:", total);

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

console.log(student.firstname, student.age);
