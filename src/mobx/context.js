import { productstore } from "./store";
import React from "react";
import { useLocalObservable } from "mobx-react-lite";
const ProductContext = React.createContext();
export const ProductProvider = ({ children }) => {
  const product = useLocalObservable(productstore);
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductContext);
