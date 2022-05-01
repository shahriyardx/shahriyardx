import { createWrapper } from "next-redux-wrapper";

import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projects";
import postReducer from "./posts";

const makeStore = () => {
  return configureStore({
    reducer: {
      projects: projectReducer,
      posts: postReducer,
    },
  });
};

export const wrapper = createWrapper(makeStore);