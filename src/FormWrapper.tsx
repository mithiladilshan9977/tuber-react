import { ReactNode } from "react"

type FormWrapperPops ={
    title:string
    children:ReactNode
}
export function FormWrapper({title,children}:
    FormWrapperPops){

        return (
            <>
            <h1 >{title}</h1>
            <div  >{children}</div>
            </>
        )
    }

//     import { ReactNode } from "react"

// type FormWrapperPops ={
//     title:string
//     children:ReactNode
// }
// export function FormWrapper({title,children}:
//     FormWrapperPops){

//         return (
//             <>
//             <h1 style={{textAlign:"center", margin:0,marginBottom:"2rem"}}>{title}</h1>
//             <div style={{display:"grid",gap:"1rem .5rem" , justifyContent:"flex-start",gridTemplateColumns:"auto minmax(auto,400px)"}}>{children}</div>
//             </>
//         )
//     }
