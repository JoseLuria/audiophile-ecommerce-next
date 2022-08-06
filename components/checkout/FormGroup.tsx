import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export const FormGroup: FC<Props> = ({ children, title }) => {
  return (
    <div className="w-auto">
      <h2 className="mb-4 text-[0.813rem] uppercase text-beige font-bold">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{children}</div>
    </div>
  );
};
