const ArrayUtils = require('./index');

const numbers = [1, 2, 2, 3, 4, 5, 5];
const nested = [1, [2, [3, [4]]]];

console.log('Sum:', ArrayUtils.sum(numbers)); // 22
console.log('Unique:', ArrayUtils.unique(numbers)); // [1, 2, 3, 4, 5]
console.log('Average:', ArrayUtils.average(numbers)); // 3.14
console.log('Group By Even/Odd:', ArrayUtils.groupBy(numbers, (n) => (n % 2 === 0 ? 'even' : 'odd')));
console.log('Flatten:', ArrayUtils.flatten(nested)); // [1, 2, 3, 4]
console.log('Max:', ArrayUtils.max(numbers)); // 5
console.log('Min:', ArrayUtils.min(numbers)); // 1
console.log('Compact:', ArrayUtils.compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log('Chunk (size 2):', ArrayUtils.chunk(numbers, 2)); // [[1, 2], [2, 3], [4, 5], [5]]
console.log('Shuffle:', ArrayUtils.shuffle(numbers)); // Random order
