import { createWrapper } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projects";


const makeStore = () => {
  return configureStore({
    reducer: {
      projects: projectReducer
    },
  });
};

export const wrapper = createWrapper(makeStore);