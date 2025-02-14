// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const createGridRows = (items) => {
  const rows = [];
  let index = 0;

  while (index < items?.length) {
    const remainingItems = items.length - index;

    if (remainingItems === 7) {
      // Special case for 7: [3, 2, 2]
      rows.push(items.slice(index, index + 3));
      rows.push(items.slice(index + 3, index + 5));
      rows.push(items.slice(index + 5, index + 7));
      index += 7;
    } else if (remainingItems === 5) {
      // Special case for 5: [3, 2]
      rows.push(items.slice(index, index + 3));
      rows.push(items.slice(index + 3, index + 5));
      index += 5;
    } else if (remainingItems === 4) {
      // Prevent 4 in a row by adjusting previous rows
      if (rows.length > 0 && rows[rows.length - 1].length === 2) {
        rows[rows.length - 1].push(items[index]);
        rows.push(items.slice(index + 1, index + 4));
        index += 4;
      } else {
        rows.push(items.slice(index, index + 2));
        rows.push(items.slice(index + 2, index + 4));
        index += 4;
      }
    } else if (
      rows.length >= 2 &&
      rows[rows.length - 1].length === 2 &&
      rows[rows.length - 2].length === 2 &&
      remainingItems > 2
    ) {
      // Avoid more than 2 consecutive rows of 2
      rows.push(items.slice(index, index + 3));
      index += 3;
    } else {
      // Default case: Create a row of 3 or 2
      const rowSize = remainingItems >= 3 ? 3 : 2;
      rows.push(items.slice(index, index + rowSize));
      index += rowSize;
    }
  }

  return rows;
};
