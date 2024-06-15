const initialdata = {
    list:[]
}

export const todoReducer = (state=initialdata,action) =>{
       switch (action.type)
       {
        case "ADD_TODO" : 
        const {id,data} = action.payload;
        if(data.length >2){
        return{
            ...state,
            list: [
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }
    }
    return state;

        case "DELETE_TODO" : 
        const newlist  = state.list.filter((elem)=>elem.id !== action.payload.id )

        return{
            ...state,
            list : newlist
        }

        case "REMOVE_TODO" :
            return {
                ...state,
                list: []

            }

        default : return state;

       }
}