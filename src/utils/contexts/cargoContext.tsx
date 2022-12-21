import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

type CargoDetailsProviderProps = {
  children: ReactNode;
};

type cargoDetailsContext = {
  visible: boolean;
  openModal: (contDetail: string, shippingLine: string) => void;
  closeModal: () => void;
  cargoDetails: any;
  loading:boolean;
};

const cargoDetailsContext = createContext({} as cargoDetailsContext);

export const useCargoDetails = () => {
  return useContext(cargoDetailsContext);
};

export const CargoDetailsProvider = ({
  children,
}: CargoDetailsProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [cargoDetails, setCargoDetails] = useState({});
  const [loading,setLoading] = useState(true)

  const openModal = (contDetail: string, shippingLine: string) => {
    setVisible(true);
    axios
      .post("https://apis.transpost.co/api/tracking", {
        contDetail,
        shippingLine,
      })
      .then((response) => {
        const fetchedData = response.data;
        console.log("Response",response.data);
        
        setCargoDetails(fetchedData);
        setLoading(false)
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
        setLoading(false)
      });
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <cargoDetailsContext.Provider
      value={{
        visible,
        openModal,
        closeModal,
        cargoDetails,
        loading
      }}
    >
      {children}
    </cargoDetailsContext.Provider>
  );
};
