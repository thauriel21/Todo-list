const Todo = (props) => {
    return (
        <div>
            <input type="checkbox" />
            <label>{props.children}</label>
            <span>
                <button onClick = {props.click}>🗑️</button>
            </span>

        </div>
    )
}
export default Todo