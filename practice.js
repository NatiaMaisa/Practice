function udris(a, b) {
  if (a == b) {
    return "a და b ტოლია";
  } else if (a < b) {
    return "a ნაკლებია b-ზე";
  } else {
    return " a მეტია b-ზე";
  }
}
console.log(udris(4, 8));

function bool(a, b) {
  if (a + b > 100) {
    return "True";
  } else {
    return "False";
  }
}
console.log(bool(10, 20));

function calculatenums(n1, n2) {
  return n1 + n2 > 100;
}
console.log(calculatenums(55, 69));
console.log(calculatenums(33, 37));

function score(p1, p2, p3) {
  return p1 + p2 * 2 + p3 * 3;
}
let totalscore = score(6, 4, 2);
console.log(totalscore);

function paramArr(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(paramArr(3, 6));

let person = {
  firstName: "Natia",
  lastName: "Maisuradze",
  age: 30,
};
function pers(age) {
  if (age < 18) {
    console.log(person.firstName, "is not adult");
  } else {
    console.log(person.firstName, "is adult");
  }
}
pers(person.age);

let phones1 = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
for (ph of phones1) {
  console.log(ph);
}

let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
for (let i = 0; i < phones.length; i++) {
  console.log(phones[i]);
}

for (let i=2; i<=13; i++){
    if(i%2===0){
        console.log(i)
    }
}

for (let i=2; i<=13; i+=2){
    console.log(i);
}


let num =23;
let i=1;

while(i<=23){
    console.log(i)
    i++
}
