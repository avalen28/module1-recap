# Module 1 recap practise 💪🏼

> 💡 In these last 3 weeks we have done a LOT of different things. These are exercises designed to practise writing some functions and try to remember some CSS to get you ready for the project.

## Iteration 1: HTML base 💻

Add the HTML structure to the `index.html` file and add a link to the `index.js` and the `style.css` files. Make sure they are well connected before proceeding.

---

## Iteration 2: getMaxNum 🔢

In the file `index.js`: create a function called `getMaxNum` that, when given an array of numbers as an argument, will return the highest number. The function will previously filter out any element that is not a number.

```js
getMaxNum([3, 5, 7]); // Should return 7
getMaxNum(["hello", 19, 1, undefined]); // Should return 19
```

---

## Iteration 3: changeItem ↩

In the file `index.js`: create a function called `changeItem`. This function will receive 3 parameters: an array, and two numbers.

The function should return the array, but all the elements inside that were equal to the first number should be substituted with the second number.

You will always receive only integer numbers and will always receive the three arguments.

```js
changeItem([3, 5, 7], 3, 4); // Should return [4,5,7]
changeItem([17, 18, 6, 18, 3], 18, 2); // Should return [17, 2, 6, 2, 3];
changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8); // Should return [8, 8, 3, 2, 4, 8, 8]
```

---

## Iteration 4: orderByDate 📇

Considering that your function will receive an array of objects like this one (only one argument):

```js
const birthdays = [
  {
    name: "Bob",
    year: 1989,
  },
  {
    name: "Rosita",
    year: 1990,
  },
  {
    name: "Stevie",
    year: 1988,
  },
  {
    name: "Marlon",
    year: 1979,
  },
];
```

In the file `index.js`: create a function called `orderByDate`. The function should return the array of objects sorted by years (increasing order).

---

## Iteration 5: New machine gun 🔫

In the file `index.js`: create a new class called `Weapon`. Each weapon will have the following properties:

- type: it will be a name passed to the constructor
- power: it will be a number passed to the constructor between 20 and 100
- ammo: it will be a number of bullets passed to the constructor. If none are passed, by default it will be 10.

And the following methods:

- shoot: it will decrease the number of bullets (ammo) 1 by 1 every 30 milliseconds.
- stopShooting: it will stop the shooting.
- reload: it will receive a number of bullets. It will wait two seconds, and then it will increase the ammo by the number of bullets recieved.

> ⚠️ You can add properties if you need them, these are just the minimum. You should also include console.logs to see that happens when you call the methods on the new instance.

When finished, you should be able to do something like this:

```js
const machineGun = new Weapon("Machine gun", 90, 50);
machineGun.shoot();
machineGun.stopShooting();
machineGun.reload(35);
```

---

## Iteration 6: HTML & CSS, remember? 🖌️

Considering the following design, add the HTML and CSS needed to replicate the following design **with the images, fonts and colors of your own choosing**, but with the same disposition of elements:

![](img/landing.png)

Requirements:

- The navbar should have links and icons in the same places
- There should be a big H1
- There should be a paragraph
- There should be 2 call-to-actions (buttons) clearly different
- There should be some logos underneath the buttons
- All the landing page should always occupy 100% of the viewport's width and height and the background image should cover all the content
- You decide how this all translates in terms of responsiveness, and you should start mobile-first.

Remember to add the images needed in the `img` folder.
