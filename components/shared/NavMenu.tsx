import React, { FC } from "react";
import { CategoriesList, ModalContainer } from "../";
import { motion } from "framer-motion";
import { navBarMenuVariants } from "../../animations";

interface Props {
  action: () => void;
}

export const NavMenu: FC<Props> = ({ action }) => {
  return (
    <ModalContainer action={action} noAnimation>
      <motion.div
        variants={navBarMenuVariants}
        className="bg-white py-8 rounded-b-lg px-6 h-full overflow-auto md:h-auto md:px-10 md:py-14"
      >
        <CategoriesList />
      </motion.div>
    </ModalContainer>
  );
};
