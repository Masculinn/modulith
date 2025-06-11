import { FC } from "react";
import { RootProviderProps } from "@/interfaces";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

const RootProvider: FC<RootProviderProps> = ({ children }) => {
  const { layoutPadding, scrollbarActive } = useSelector(
    (state: RootState) => state.cookie
  );

  return (
    <main
      className={`
        h-[90vh] w-full
        ${!scrollbarActive && "scrollbar-none"}
        overflow-y-scroll 
        `}
      style={{
        padding: `${Number(layoutPadding) * 4}px`,
      }}
    >
      {children}
    </main>
  );
};

export default RootProvider;
