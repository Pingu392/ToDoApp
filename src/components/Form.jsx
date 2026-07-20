function Form() {
    const handleSubmit = (event) => {
        event.preventDefault(); // prevents form from submitting and reloading app
        event.target.reset(); // reset the form
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
        </form>
    )
}