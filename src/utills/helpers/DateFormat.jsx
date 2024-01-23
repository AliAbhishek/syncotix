import moment from "moment"

export const DateFormat = (date) =>{
    return(
        moment(date).format('MMM DD YYYY')
    )
}


export const InputDate = (date) =>{
    return(
        moment(date).format('YYYY-MM-DD')
    )
}