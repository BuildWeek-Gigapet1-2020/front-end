import React from 'react'

function Login() {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login
