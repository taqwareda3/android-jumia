import React from "react";
import {  NativeBaseProvider } from "native-base";
import ShowProducts from "./src/components/showProducts/showProducts";
export default function App() {

  return (
    <>
      <NativeBaseProvider>
        <ShowProducts />
      </NativeBaseProvider>
    </>
  );
}
