// const maybe = v => v ? v : 'default';

// Below version of maybe() fixes no-confusing-arrow and no-unneeded-ternary
const maybe = v => v || 'default';

console.log(maybe('yes'));
// -> yes
console.log(maybe());
// -> default
