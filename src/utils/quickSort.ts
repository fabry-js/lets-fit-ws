function swap(items: any, leftIndex: number, rightIndex: number) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items: any, left: any, right: any) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

export default function __quickSort(items: any, left: any, right: any) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      __quickSort(items, left, index - 1);
    }
    if (index < right) {
      __quickSort(items, index, right);
    }
  }
  return items;
}
