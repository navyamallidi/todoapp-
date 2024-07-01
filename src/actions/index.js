export const addtodo = (data) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
        data: data,
      },
    };
  };
  
  export const deletetodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: {
        id: id,
      },
    };
  };
  
  export const edittodo = (id, data) => {
    return {
      type: 'EDIT_TODO',
      payload: {
        id: id,
        data: data,
      },
    };
  };
  
  export const removetodo = () => {
    return {
      type: 'REMOVE_TODO',
    };
  };
  