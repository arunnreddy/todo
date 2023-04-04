

export const Add=(value)=>{
    console.log("value",value)
    return {
        type:"add",
        payload:value
    }
}

 export const Remove=(value)=>{
    return {
        type:"remove",
        payload:value
    }
}