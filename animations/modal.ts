export const modalWrapperVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterchildren",
      duration: 0.2,
    },
  },
};

export const modalContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
