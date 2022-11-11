const Todo = (props) => {
    return (
        <div>
            <input type = "checkbox" />
            <label>{props.children}</label>
        </div>
    )
}
export default Todo