const ToolsCard = ({ name, icon }) => {
  return (
    <div className="flex gap-2 border shadow-dark justify-center items-center w-fit px-2 py-1 rounded-md ">
      {icon}
      <span className="uppercase text-[10px] md:text-[14px] ">{name}</span>
    </div>
  );
};

export default ToolsCard;
