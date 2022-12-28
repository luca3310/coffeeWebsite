function Menu() {
  return (
    <section
      id="menu"
      className="text-base md:text-xl bg-gradient-to-b from-black to-orange-900 w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="text-white flex justify-center align-middle font-serif w-3/4	bg-black orange-900 rounded border-b-0 border-4 p-5">
        <h1>Call us: 484-426-2349</h1>
      </div>
      <div className="font-serif  w-3/4	bg-black orange-900 rounded border-4 p-5 flex flex-col gap-4">
        <ul className="text-white flex justify-between border-b border-dashed	">
          <li>Cafe Mocha</li>
          <li>$5,99</li>
        </ul>
        <ul className="text-white flex justify-between border-b border-dashed	">
          <li>Cappuccino</li>
          <li>$4,99</li>
        </ul>
      </div>
    </section>
  );
}

export default Menu;
