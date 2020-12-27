import { productstore } from "./store";
import React from "react";
import { useLocalObservable } from "mobx-react-lite";
const ProductContext = React.createContext();
export const ProductProvider = ({ children }) => {
  const notesStore = useLocalObservable(productstore);
  return (
    <ProductContext.Provider value={notesStore}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => React.useContext(ProductContext);
