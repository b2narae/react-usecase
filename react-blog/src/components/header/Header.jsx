import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Raect & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="" className="headerImg" />
    </div>
  )
}