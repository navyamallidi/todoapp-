export const addtodo = (data) => {
    return{
        type: 'ADD_TODO',
        payload : {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deletetodo = (id) => {
    return{
        type:'DELETE_TODO',
        payload: {
            id: id
        }
    }
}

export const removetodo = () => {
    return {
        type:'REMOVE_TODO'
    }
}