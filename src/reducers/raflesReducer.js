import {
    GET_RAFLES_LIST
  } from "../actions/types";
  
  const initialState = {
   
task:[]    
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {      
          case `${GET_RAFLES_LIST}_PENDING`:
            return {
              ...state,            
            };
         
            case `${GET_RAFLES_LIST}`:
                console.log(`test  : ${action.payload }`)
                const task = action.payload;
        
                return {
                  ...state, task
    
                };
          default:
            return state;
        }
    }