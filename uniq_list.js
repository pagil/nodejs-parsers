"use strict";
var mySet = new Set();
mySet.add("Example 1");
mySet.add("Example 1");
mySet.add("Example 2");

console.log(mySet.size);

for (let item of mySet.values()) console.log(item);