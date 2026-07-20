function TODOHero({ todos_completed, total_todos}){  //Object destructuring
    return(
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up!</p>
            </div>
            <div>
                {todos_completed}/{total_todos}  {/* Brackets force jsx to evaluate js expression. In this case it's getting the value of these props */}
            </div>
        </section>
    )
}

export default TODOHero;