/* eslint-disable no-unused-vars */

export const scrollToTop = (item) => {
  if (item) {
    item.scrollTo({ top: 0, behavior: "smooth" });
  }
};