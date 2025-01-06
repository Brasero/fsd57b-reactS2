const BaseNumberInput = ({base, value, onBaseChange}) => {
 
 const handleChange = (e) => {
  const {value} = e.target
  onBaseChange(value, base)
 }
 
 return <div>
  <label>Nombre base {base} : </label>
  <input type="text" name={base} value={value} onChange={handleChange} />
 </div>
}

export default BaseNumberInput;