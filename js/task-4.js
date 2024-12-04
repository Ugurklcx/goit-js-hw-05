console.log("---------TASK-4---------");
const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    // Eğer kullanıcının cinsiyeti gender ile eşleşiyorsa, bakiyesini ekliyoruz
    return user.gender === gender ? total + user.balance : total;
  }, 0); // Başlangıç değeri 0
};
const allUsers = [
{
  name: "Moore Hensley",
  gender: "male",
  balance: 2811
},
{
  name: "Sharlene Bush",
  gender: "female",
  balance: 3821
},
{
  name: "Ross Vazquez",
  gender: "male",
  balance: 3793
},
{
  name: "Elma Head",
  gender: "female",
  balance: 2278
},
{
  name: "Carey Barr",
  gender: "male",
  balance: 3951
},
{
  name: "Blackburn Dotson",
  gender: "male",
  balance: 1498
},
{
  name: "Sheree Anthony",
  gender: "female",
  balance: 2764
}
];

// Test 1: "male" cinsiyetine ait toplam bakiye
console.log(getTotalBalanceByGender(allUsers, "male")); 
// Beklenen çıktı: 12053

// Test 2: "female" cinsiyetine ait toplam bakiye
console.log(getTotalBalanceByGender(allUsers, "female"));
// Beklenen çıktı: 8863