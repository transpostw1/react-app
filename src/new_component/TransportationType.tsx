import React, { useState } from "react";

const TransportationType = () => {
    // const [selectedTType, setSelectedTType] = useState<HTMLOptionElement>("")
  return (
    <div>
      <h3>TransportationType</h3>
      <select >
          {["Full container Load","Less container Load","Bulk"].map((item)=>{
              return ( <option  key={item} value={item}>{item}</option>)
          })}
      </select>
    </div>
  );
};

export default TransportationType;
