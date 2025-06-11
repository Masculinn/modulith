import { StoreProviderProps } from "@/interfaces";
import { store } from "@/redux";
import { FC } from "react";
import { Provider } from "react-redux";

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
