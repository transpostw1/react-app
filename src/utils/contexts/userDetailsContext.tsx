import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

import { IquoteList } from "../../new_component/Quotation/QuoteModal";
import { UserDetailsProps } from "../../components/SectionHeroArchivePage/SectionHeroArchivePage";

type UserDetailsProviderProps = {
  children: ReactNode;
};

export interface IkycStatus {
  KYC: boolean;
  message: string;
  status: string;
}

type quoteListContext = {
  userState: UserDetailsProps | null;
  createUser: (userData: UserDetailsProps) => void;
  updateKyc: (kycStatus: IkycStatus) => void;
};

// // getLocalStorage
export const getLocalStorage = () => {
  let user_details = localStorage.getItem("user_details");
  if (user_details) {
    return (user_details = JSON.parse(
      localStorage.getItem("user_details") || ""
    ));
  } else {
    return null;
  }
};

const userDetailsContext = createContext({} as quoteListContext);

export const useUserDetails = () => {
  return useContext(userDetailsContext);
};

export const UserDetailsProvider = ({ children }: UserDetailsProviderProps) => {
  const [userState, setUserState] = useState<UserDetailsProps | null>(
    getLocalStorage()
  );
  const [userDetails, setUserDetails] =
    useLocalStorage<UserDetailsProps | null>("user_details", null);

  useEffect(() => {
    setUserDetails(userState);
  }, [userState]);

  // adding new user
  const createUser = (userData: UserDetailsProps) => {
    console.log("User Data", userData);
    setUserState(userData);
  };

  const updateKyc = (kycStatus: IkycStatus) => {
    if (userState) {
      setUserState({
        ...userState,
        KYC: kycStatus.KYC,
      });
    }
  };

  return (
    <userDetailsContext.Provider
      value={{
        userState,
        createUser,
        updateKyc,
      }}
    >
      {children}
    </userDetailsContext.Provider>
  );
};
