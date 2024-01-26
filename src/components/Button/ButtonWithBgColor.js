const ButtonWithBgColor = ({name}) => {
  return (
    <div>
      <button className="bg-[#025] text-white px-12 py-3 rounded-3xl">{name}</button>
    </div>
  );
};

export default ButtonWithBgColor;