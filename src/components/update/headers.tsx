const Headers = () => {
  return (
    <header className="flex items-center justify-between p-4 ">
      {/* logo */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-white to-red-500 text-transparent bg-clip-text ">
        Monoverse
      </h1>

      {/* auth */}
      <div className="flex items-center  bg-white text-black rounded-full text-xm  px-4 p-1">
        Sign In
      </div>
    </header>
  );
};
export default Headers;
