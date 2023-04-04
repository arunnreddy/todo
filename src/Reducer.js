const products=[]

const Reducer=(state=products,action)=>{
console.log(action)
    switch(action.type){
        case "add" :
            return [...state,action.payload];
            case "remove":
                return state.filter((user)=>user.name!==action.payload)

            default:return state
    };
  

}
export default Reducer