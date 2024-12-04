console.log("---------TASK-2---------");
const getUsersWithFriend = (users, friendName) => {
  // 'users' dizisini filter() ile tarayıp, arkadaşlar listesinde 'friendName' bulunan kullanıcıları döndürüyoruz.
  return users.filter((user) => user.friends.includes(friendName));
};
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

// Test 1: "Briana Decker" arkadaşına sahip kullanıcılar
console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// Beklenen çıktı:
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

// Test 2: "Goldie Gentry" arkadaşına sahip kullanıcılar
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// Beklenen çıktı:
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

// Test 3: "Adrian Cross" arkadaşına sahip kullanıcılar (bulunmuyor)
console.log(getUsersWithFriend(allUsers, "Adrian Cross"));
// Beklenen çıktı:
// []