import React from "react"

const date = new Date()
    const day = date.getDate('')+"/"
    const month = date.getMonth('')+1+"/"
    const year = date.getFullYear('')+"."
    const dateStamp = [day , month , year ]
    //console.log({dateStamp})

function DateStamp() {
    return(
   <p className= "dateStamp"> {dateStamp}</p>
    )
}

export default DateStamp