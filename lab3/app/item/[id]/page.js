import TestBtn from "./testbtn"
import Plus from "@/lib/plus"

export default function Item({params}){
    const added = Plus(2,7)

    return(
        <div>
            <p>item : {params.id}</p>
            <p>{added}</p>
            <TestBtn/>
        </div>
    )
}