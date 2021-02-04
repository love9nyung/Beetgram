import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { createContext, useMemo, useReducer } from "react";

const initialStateTags = {
  tags: [], // Home 접속시 사진에 포함된 모든 태그 정보
  Tagged: [], // 검색하고 싶은 태그의 tag_no 리스트
};
function tagReducer(state, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return {
        //tags: state.tags.concat(action.tag),
        tags: action.tag,
        Tagged: action.tagT,
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

export const tagsDispatch = createContext(null);

function App() {
  console.log("App");
  const [state, dispatch] = useReducer(tagReducer, initialStateTags);
  const { tags, Tagged } = state;
  const value = useMemo(() => ({ dispatch, tags, Tagged }), [
    dispatch,
    tags,
    Tagged,
  ]);

  return (
    <tagsDispatch.Provider value={value}>
      <GlobalStyles />
      <Router />
    </tagsDispatch.Provider>
  );
}

export default App;
