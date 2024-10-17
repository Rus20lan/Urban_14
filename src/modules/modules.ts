export function updateStringByNum(str: string, num: number): string {
  const strNum = str.length;

  if (strNum >= num) {
    return str.substr(0, num - 3) + '...';
  } else {
    return str;
  }
}

export function checkingIndexInRange(
  move: string,
  currentArray: number[],
  lastIndex: number
): number[] {
  if (move === 'next') {
    return currentArray
      .map((item) => item + 1)
      .map((item) => checkingNumInRange(item, lastIndex));
  } else {
    return currentArray
      .map((item) => item - 1)
      .map((item) => checkingNumInRange(item, lastIndex));
  }
}

function checkingNumInRange(currentNum: number, lastIndex: number): number {
  if (currentNum < 0) {
    return lastIndex;
  }
  if (currentNum > lastIndex) {
    return 0;
  }
  return currentNum;
}