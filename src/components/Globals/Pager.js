import React from "react"
import {Link} from "gatsby"

const Pager = ({pageContext}) => {
    const { previousPagePath, nextPagePath } =  pageContext
    

    var res = previousPagePath.toString().charAt(previousPagePath.length-1)
    var res2 = nextPagePath.toString().charAt(nextPagePath.length-1)
    var currentPage

    if (res==='s'){
        res=1
    }

    if ((res==='') && (res2!=='') ){
        currentPage='1'
    } else if((res2==='') && (res!=='')) {
        currentPage=parseInt(res)+1
    } else if((res2==='') && (res==='')) {
        currentPage='1'
    } 
    else {
        currentPage=parseInt(res)+1
    }

    return(
    <center>
        <div className="row justify-content-center pb-4">
           <h4 className="px-2"> {previousPagePath && (
                <span><Link to={previousPagePath}>{res}</Link></span> 
            )} </h4>
           <h4 className="px-2"> {currentPage} </h4>
           <h4 className="px-2"> {nextPagePath && (
                <span><Link to={nextPagePath}>{res2}</Link></span>
            )} </h4>
        </div>
    </center>
    )

}

export default Pager