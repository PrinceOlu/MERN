import React from "react";
import style from "../src/styles/App.module.css";
import logo from "../src/images/gettyimages.jpg";



function App (){
    return (
<div className={style.containerStyle}>
<img className={style.logo} src={logo} alt="Profile-img"/>
<p className={style.intro}>My Bio:</p>
<ul className={style.hobbies}>
    <li className={style.hobby}>Soccer</li>
    <li className={style.hobby}>eating</li>
    <li className={style.hobby}>sleeping</li>
</ul>
</div>
    )
};
export default App;