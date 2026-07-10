

export function moneyFormat(value){
    return(
        (value).toLocaleString('en-PH',{
            style : 'currency' ,
            currency : 'PHP',
            minimumFractionDigits : 0,
            maximumFractionDigits : 2,
        })
    )
}