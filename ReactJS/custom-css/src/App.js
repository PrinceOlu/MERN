import "./externalStyle.css";
import style from "./UserProfile.module.css";
function App() {
  // inline style for the entire div container
  const containerStyle = {
    textAlign: "center",
    margin: "20px",
  };
  return (
    // lets use it in the div
    <div style={containerStyle}>
      <img
        src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg"
        alt="Avatar"
        // inline styling
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2 className="name">Prince Olusegun</h2>
      <p className="bio">fullstack web developer</p>
      <p style={{ color: "green", fontSize: "50px" }}>Canada</p>
      <ul className={style.hobbies}>
        <li className={style.hobby}>Coding</li>
        <li className={style.hobby}>Movies</li>
        <li className={style.hobby}>Music</li>
      </ul>
    </div>
  );
}

export default App;
