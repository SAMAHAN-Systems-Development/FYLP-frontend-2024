const Divider = ({ title, children }) => {
  return (
    <div className="pt-14 px-4 sm:px-6 md:px-8 lg:px-[12.5rem] pb-[5.72rem]">
      <div className="flex justify-center uppercase font-semibold xl:text-2xl xsm:text-[1.04169rem] font-poppins pb-[4.75rem]">
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Divider;
