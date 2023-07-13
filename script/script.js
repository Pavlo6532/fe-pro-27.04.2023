"use strict";

function createIterator() {
  let count = 0;

  const iterator = {
    next: function () {
      count++;
      if (count === 1) {
        console.log("start");
      }
      if (count <= 3) {
        return { value: count, done: false };
      } else {
        console.log("finish");
        return { done: true };
      }
    },
  };

  return iterator;
}

const iterator = createIterator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
