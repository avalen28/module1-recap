/// Iteration 2: getMaxNum

function getMaxNum(numArr) {
  let firstNumber = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (typeof numArr[i] !== "number") {
      continue;
    }
    if (numArr[i] > firstNumber) {
      firstNumber = numArr[i];
    }
  }
  return firstNumber;
}

// Iteration 2 tests:
// console.log(getMaxNum([45, 67, 12, 34])); // Should return 67
// console.log(getMaxNum(["hello", [0, 1, 2], 34, 45, 12, 0])); // Should return 45
// console.log(typeof 6);

/// Iteration 3: changeItem

function changeItem(arr, var1, var2) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== var1) {
      result.push(arr[i]);
    } else {
      result.push(var2);
    }
  }
  return result;
}

// Iteration 3 tests:
function changeItem(arrayNums, num1, num2) {
  arrayResult = [];
  arrayNums.forEach((element) => {
    if (element === num1) {
      arrayResult.push(num2);
    } else {
      arrayResult.push(element);
    }
  });
  return arrayResult;
}
//console.log(changeItem([3, 5, 7], 3, 4)); // Should return [4,5,7]
//console.log(changeItem([17, 18, 6, 18, 3], 18, 2)); // Should return [17, 2, 6, 2, 3];
// console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8]

/// Iteration 4: orderByDate

function orderByDate(object) {
  return object.sort((a, b) => a.year - b.year);
}

// Iteration 4 tests:
//const birthdays = [
// {
//   name: "Bob",
//   year: 1989,
// },
// {
//   name: "Rosita",
//   year: 1990,
// },
// {
//   name: "Stevie",
//   year: 1988,
// },
// {
//   name: "Marlon",
//   year: 1979,
// },
//];
// const importantDates = [
//   {
//     title: 'Wedding aniversary',
//     year: 2014,
//   },
//   {
//     name: "Daddy's birthday",
//     year: 2013,
//   },
//   {
//     name: 'Graduation party',
//     year: 2019,
//   }
// ]
// console.log(orderByDate(birthdays)); // Should return them ordered 1979, 1988, 1989, 1990
// console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019

/// Iteration 5: new machine gun

class Weapon {
  constructor(type, power, ammo = 10) {
    this.type = type;
    this.power = power;
    this.ammo = ammo;
    this.shootingId = 0;
  }
  shoot() {
    this.shootingId = setInterval(() => {
      // put it in a new propiety always
      if (this.ammo === 0) {
        this.stopShooting();
      } else if (this.ammo > 0) {
        this.ammo = this.ammo - 1;
      }
    }, 30);
  }

  stopShooting() {
    clearInterval(this.shootingId);
  }
  reload(newBullets) {
    this.setTimeout(() => {
      this.ammo = this.ammo + newBullets;
    }, 2000);
  }
}

// Iteration 5 tests
const machineGun = new Weapon("Machine gun", 90, 50);
// console.log('Begin:')
console.log(machineGun.shoot());
//setTimeout(() => machineGun.stopShooting(), 1000);
// setTimeout(() => machineGun.reload(35), 1500);
