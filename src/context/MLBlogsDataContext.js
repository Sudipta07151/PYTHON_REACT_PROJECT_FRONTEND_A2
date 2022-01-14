import { createContext, useReducer } from "react";

export const MLBlogsDataContext = createContext();

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_DATA":
      return {
        ...state,
        blogsdata: action.payload,
      };
    case "CLEAN_ALL":
      return {
        ...state,
        blogsdata: [],
      };
    case "SEARCH_DATA":
      return {
        ...state,
        blogsdata: state.blogsdata.filter((element) => {
          return (
            element.title.toLowerCase().includes(action.payload) ||
            element.description.toLowerCase().includes(action.payload)
          );
        }),
      };
    case "SEARCH_EASY":
      return {
        ...state,
        blogsdata: state.blogsdata.filter((element) => {
          return element.difficulty === action.payload;
        }),
      };
    case "SEARCH_MEDIUM":
      return {
        ...state,
        blogsdata: state.blogsdata.filter((element) => {
          return element.difficulty === action.payload;
        }),
      };
    case "SEARCH_DIFFICULT":
      return {
        ...state,
        blogsdata: state.blogsdata.filter((element) => {
          return element.difficulty === action.payload;
        }),
      };
    default:
      return state;
  }
};

export const MLBlogsDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    blogsdata: [],
  });
  console.log("MLDataContext State", state);

  return (
    <MLBlogsDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MLBlogsDataContext.Provider>
  );
};
