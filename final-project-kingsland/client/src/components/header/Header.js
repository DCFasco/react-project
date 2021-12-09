import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
}
