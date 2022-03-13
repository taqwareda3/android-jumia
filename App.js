import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "./core/config";
import ShowProducts from "./src/components/showProducts/showProducts";
export default function App() {


  return (
    <>
      <ShowProducts/>
    </>
  );
}
