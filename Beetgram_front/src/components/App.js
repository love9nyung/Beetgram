import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { createContext, useMemo, useReducer } from "react";

const initialStateTags = {
  tags: [],
  Tagged: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return {
        //tags: state.tags.concat(action.tag),
        tags: action.tag,
        Tagged: action.tag.map((i) => i.active && state.Tagged.push(i.tag_no)),
      };
    case "DEL_SEARCH":
      return {
        //   ...state,
        //   tags: state.tags.filter((tag) => tag.tag_no !== action.tag_no),
      };
    case "TAGGED":
      return {
        ...state,
        tags: state.tags.map((tag) =>
          tag.tag_no === action.tag_no ? { ...tag, active: !tag.active } : tag
        ),
      };
    default:
      return state;
  }
}

export const tagDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialStateTags);

  const { tags } = state;
  const { Tagged } = state;

  const value = useMemo(() => ({ dispatch, tags, Tagged }), [
    dispatch,
    tags,
    Tagged,
  ]);
  return (
    <tagDispatch.Provider value={value}>
      <GlobalStyles />
      <Router />
    </tagDispatch.Provider>
  );
}

export default App;
