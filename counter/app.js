// Write your JavaScript here.
(() => {
  let count = 0;
  document.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault();
      count++;
      e.target.textContent = 'Clicks: ' + count;
  });
})()


// react
/*
import './styles.css';
import {useState, useEffect} from 'react';
export default function App() {
  let [count, setCount] = useState(0);
  const clickHandler = (e) => {
    return setCount(count+1);
  }
  return (
    <div>
      <button onClick={clickHandler}>Clicks: {count}</button>
    </div>
  );
}
*/
