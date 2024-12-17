import React from "react";

const ButtonComponent = ({
  label,
  type = "button",
  disabled = false,
  btnWidth = "w-full",
  btnHeight="h-auto",
  variant = "default",
  onClick,
  
}) => {
  const variantClasses = {
    default: `bg-primary rounded-full shadow-boxshadow-1 mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 disabled:opacity-50 flex items-center justify-between`,    
    login:`bg-loginButton rounded-full shadow-boxshadow-1 mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 flex items-center justify-between disabled:opacity-50`,
    cardButton:`bg-loginButton rounded-lg shadow-boxshadow-1 mt-8 p-4 text-primary font-default hover:bg-secondary transition-all duration-300 flex items-center justify-between disabled:opacity-50`,
   };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses[variant]} ${btnWidth} ${btnHeight} relative font-semibold text-primary shadow-[0px_4px_4px_0px_#00000040] px-4 rounded-full`}
      >
      <span className="flex-grow text-center">{label}</span>
      
    </button>
  );
};

export default ButtonComponent;
