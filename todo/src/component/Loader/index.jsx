// path: todo/src/component/Loader/index.jsx
import "./style.scss";

const Loader = ({size = 100}) => {
 
 return (
  <div className="Loader">
    <div className={"Loader__item"} style={{
     height: `${size}px`,
     width: `${size}px`
    }}></div>
  </div>
 )
}

export default Loader