// export function getExcerpt(text) {
//   const excerpt = text.substring(0, 100) + "...";
//   return excerpt;
// }

export const getExcerpt = (text) => {
  const excerpt = text.substring(0, 100) + "...";
  return excerpt;
};

// export function getStockStatus(inStock) {
//   if (inStock) {
//     return {
//       text: "På lager",
//       class: "in-stock",
//     };
//   } else {
//     return {
//       text: "Udsolgt",
//       class: "out-of-stock",
//     };
//   }
// }

export const getStockStatus = inStock => {
  if (inStock) {
    return {
      text: "På lager",
      class: "in-stock",
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock",
    };
  }
}