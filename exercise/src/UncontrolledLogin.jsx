export function UncontrolledLogin(){
    function handleSubmitForm(event){
        event.preventDefault();

        const formData = new FormData(event.target);

        const userDataApi = {
            username: formData.get("username"), 
            password: formData.get("password"),
            status: formData.get("status")
        }
        console.log(userDataApi)
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