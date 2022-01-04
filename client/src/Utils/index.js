export const handleInput = (event, state, setState) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(event.target)
    setState({
        ...state, [name]: value
    })

}