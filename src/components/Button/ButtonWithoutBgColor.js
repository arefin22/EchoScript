const ButtonWithoutBgColor = ({name}) => {
  return (
    <div>
      <button className="px-12 py-3 rounded-3xl border-2 hover:bg-[#025] border-[#025] text-[#025] hover:text-white">{name}</button>
    </div>
  );
};

export default ButtonWithoutBgColor;
