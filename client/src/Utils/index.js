export const handleInput = (event, state, setState) => {
    let name = event.target.name;
    let value = event.target.value;
    setState({
        ...state, [name]: value
    })

}