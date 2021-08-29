import store from '../store';
import  config from '../config';
import {GET_RAFLES_LIST} from './types';
export const getRaflesTagList = () => {
    console.log(config);

    
   
    
  const  dataList =  [
      {name:"MGold1",value:"1", category: "success"},
      {name:"MGold2", value:"2", category:"success"},
      {name:"MGold3", value:"3", category:"failure"}
    ]
   
    return {
        type: GET_RAFLES_LIST,
        payload:dataList
    }
}





