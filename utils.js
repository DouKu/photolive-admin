const sortNumber = (a, b) => {
  return b - a
}

export const range = (size, startAt = 0, sort = 1) => {
  if (sort === 1) {
    return [...Array(size).keys()].map(i => i + startAt).sort(sortNumber)
  }
  return [...Array(size).keys()].map(i => i + startAt);
}
