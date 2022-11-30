import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Safak"/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="b2narae@gmail.com"/>
                <label>password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
