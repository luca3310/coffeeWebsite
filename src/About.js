function About() {
  return (
    <section
      id="about"
      className="relative text-xs md:text-sm lg:text-base text-center bg-gradient-to-b from-black to-orange-900 w-screen h-screen flex justify-center "
    >
      <div className="container flex justify-center gap-20  items-center flex-row">
        <div className="font-serif w-1/4 flex flex-col gap-3">
          <img
            className="shadow-lg border-black border-2"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="profile"
          />
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="font-serif w-1/4 flex flex-col gap-3 justify-center items-center">
          <img
            className="w-32 h-auto md:visible collapse"
            src="images\tea.png"
            alt="coffe"
          />
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 text-white p-3 w-screen bg-black">
        copyright lucasKragh
      </footer>
    </section>
  );
}

export default About;
