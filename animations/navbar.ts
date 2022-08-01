export const navBarMenuVariants = {
  initial: { clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      when: "afterchildren",
      duration: 0.2,
    },
  },
};
