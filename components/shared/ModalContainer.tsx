import { FC } from "react";
import { motion } from "framer-motion";
import { ComponentProps } from "@/interface";
import { modalContainerVariants, modalWrapperVariants } from "@/animations";

interface Props extends ComponentProps {
  action?: () => void;
  noAnimation?: boolean;
}

export const ModalContainer: FC<Props> = ({
  children,
  className,
  style,
  action,
  noAnimation,
}) => {
  const containerStyle = `w-full h-full max-w-size ${className}`;

  return (
    <motion.div
      variants={modalWrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={action}
      className={`bg-black flex justify-center bg-opacity-40 z-[1] fixed left-0 w-full h-[calc(100%-5.563rem)] top-[5.563rem] ${
        !noAnimation && "px-6 md:px-10"
      } lg:top-24 lg:h-[calc(100%-6rem)] bottom-0`}
    >
      {noAnimation ? (
        <div style={style} className={containerStyle}>
          {children}
        </div>
      ) : (
        <motion.div
          variants={modalContainerVariants}
          style={style}
          className={containerStyle}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
