

const Arr=(props)=>{
    const divArr=[]
    for(let i=0;i<props.arr.length;++i){
        divArr.push(<div>{props.arr[i]}</div>)
    }
    return divArr;
}

export default Arr