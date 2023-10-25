/* eslint-disable no-unused-vars */

export const scrollToTop = (item) => {
  if (item.current) {
    item.current.scrollTo({ top: 0, behavior: "smooth" });
  }
};