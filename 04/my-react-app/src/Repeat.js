export default ({ times, value }) =>
  new Array(parseInt(times, 10))
    .fill(value)
    .join(' ');
