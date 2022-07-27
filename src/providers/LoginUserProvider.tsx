import { createContext, Dispatch, SetStateAction } from "react";

import { User } from "../types/api/user";
import { Children, ReactNode, useState } from "react";

export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {Children}
    </LoginUserContext.Provider>
  );
};
