import "./register.css"

export default function Register() {
    return (
    <div className="register">
        <form action="" className="registerForm">
            <span className="registerTitle">Register</span>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username..."/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..." />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
    )
}