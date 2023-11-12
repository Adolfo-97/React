export function UncontrolledLogin(){
    function handleSubmitForm(event){
        event.preventDefault();
        const username = event.target.elements.namedItem("username").value;
        const password = event.target.elements.namedItem("password").value;
        const status = event.target.elements.namedItem("status").checked;
        const userData = [username, password, status]
        console.log(userData)
   }
    return (
        <div>
            <form onSubmit={handleSubmitForm}>
            <input name ="username" type="text"  />
            <input name ="password" type="password"  />
            <input type="checkbox" name="status" />
            <button>Login</button>
            </form>
        </div>
    )
}