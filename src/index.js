import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { f, x } from "./Logo"

const root = ReactDOM.createRoot(document.getElementById('root'));
f();
// let a=document.createElement("h1").ser
// let a = React.createElement("h1", { id: "hh" }, "hello");
// let b=React.createElement("ul",{id:"u1"},React.createElement("li",null,"בננה"),React.createElement())
let myName = "zipi"

let a = <ul id="u1" className='good'>
  <li style={{ color: "blue" }}>בננה</li>
  <li>מלפפון</li>
  <li>{myName}</li>
  <li>{Math.random() * 10}</li>
  <li>{5 / 2}</li>
  <li>{x}</li>
</ul>
let b = <><p>hello</p> <span>to you</span></>
root.render(
  a
)
  ;
//java script extension
//הרחבה של גאוה סקריפט
//תוסף
//בתוך דפי גאוה סקריפט ובתוך משתנים וכפרמטרים לפונקציותhtml כותבים קוד של 
// שתפקידו לקחת קוד גי אס איקס ולהמיר אותו לקוד של פונקציות גאוה סקריפט שבונה כאלה תגיותbabelישנו מנוע של

//כללים של גי אס איקס:
//1. חייבת להיות תגית עוטפת אחת
//2. אם הקוד יורד על יותר משורה אחת מומלץ לעטוף בסוגריים עגולים
//וזה בגלל שגאוה סקריפט מוסיף כראות עיניו נקדות ופסיקים
//3.className  אין להשץמש בשמות שמורים של גאוה סקריפט  לדוגמא:נשתמש ב
//class במקום ב-
//4.camelCaseתכונות של תגית נכתבות ב
//לדוגמא: onClick className tabIndex
//5. אם רוצים לגשת למשתנה של גאוה סקריפט או תוצאה של פונקציה או חישוב 
//יש להשתמש בצומדיים (רק מתוך קוד גי אסא איקס)
//6.מקבלת לתוכה אובייקט style מ התכונה 
reportWebVitals();


