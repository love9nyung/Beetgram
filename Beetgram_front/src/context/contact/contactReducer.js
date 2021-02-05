export default (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log(1111111444);
      console.log(action.payload);
      return {
        ...state,
        base_data: action.payload,
        loading: false,
      };
    case "CONTACT_ERROR":
      return {
        ...state,
        //error: action.payload,
      };
    case "ADD_TAGGED":
      const tagList = action.payload;
      const tags = tagList.map(
        (i) => i.active === "true" && tags.push(i.tag_no)
      );
      return {
        ...state,
        tagged: tags,
      };
    case "CLEAR_TAGGED":
      return {
        ...state,
        tagged: [],
      };
    case "TOGGLE_TAGGED":
      return {
        ...state,
        base_data: state.base_data.tag_list.map((tag) =>
          tag.tag_no === action.payload ? { ...tag, active: !tag.active } : tag
        ),
      };

    default:
      return state;
  }
};
