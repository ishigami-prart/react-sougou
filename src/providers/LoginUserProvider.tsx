import {createContext, Dispatch, SetStateAction} = from "react";

import {User} from "../types/api/user"
import { Children, ReactNode } from "react";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser:Dispatch<SetStateAction<User | null>>
}

const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: {children:ReactNode}) => {
  return (
    <LoginUserContext.Provider>
      {Children}
      <LoginUserContext.Provider>
  )
}