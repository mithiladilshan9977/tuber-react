

import { ReactElement ,useState} from "react";

export function useFinalTuberPage (numberOfSteps:ReactElement[]){

    const [index,setCurrentStepIndex] = useState(4)

    function finalgo(){
        setCurrentStepIndex(i =>{
            if(i === 4) return i
         
            return i
        })
    }

    return{
        index,
        finalstep:numberOfSteps[index],
        finalgo,
        numberOfSteps
    }

}