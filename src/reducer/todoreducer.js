const initialdata = {
    list: [],
  };
  
  export const todoReducer = (state = initialdata, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const { id, data } = action.payload;
        if (data.length > 2) {
          return {
            ...state,
            list: [
              ...state.list,
              {
                id: id,
                data: data,
              },
            ],
          };
        }
        return state;
  
      case "DELETE_TODO":
        const newlist = state.list.filter(
          (elem) => elem.id !== action.payload.id
        );
        return {
          ...state,
          list: newlist,
        };
  
      case "EDIT_TODO":
        const updatedList = state.list.map((item) =>
          item.id === action.payload.id ? { ...item, data: action.payload.data } : item
        );
        return {
          ...state,
          list: updatedList,
        };
  
      case "REMOVE_TODO":
        return {
          ...state,
          list: [],
        };
  
      default:
        return state;
    }
  };
  