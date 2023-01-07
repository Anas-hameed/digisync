const SelectMenu = ({ label, value, options, onChange }) => {

    return (
   
        <select className="rounded-sm"  value={value} onChange={onChange}>
   
        {options.map((option) => (
 
          <option value={option.value}>{option.label}</option>
 
        ))}
 
      </select>
   
    );
   
};
 
export default SelectMenu;