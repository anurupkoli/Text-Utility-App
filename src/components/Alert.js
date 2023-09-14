import React from "react";

const capitalizeWord = (word)=>{
   let newWord = word.toLowerCase();
   return newWord.charAt(0).toUpperCase() + newWord.slice(1);
}

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalizeWord(props.alert.type) + ": " + props.alert.message}
    </div>
  );
}
