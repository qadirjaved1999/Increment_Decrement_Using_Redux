import rootReducrs from "../Functionalites";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore(rootReducrs);

export default store;