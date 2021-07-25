const merge = (intervals) => {
  if (!intervals.length) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const lastInterval = res[res.length - 1];

    if (interval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(interval[1], lastInterval[1]);
    } else {
      res.push(interval);
    }
  }
  return res;
};

module.exports = merge;
