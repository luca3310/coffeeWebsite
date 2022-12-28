function About() {
  return (
    <section
      id="about"
      className="relative text-xs md:text-sm lg:text-base text-center bg-gradient-to-b from-black to-orange-900 w-screen h-screen flex justify-center "
    >
      <div className="flex justify-center items-center">
        <div className="font-serif  md:w-[20%] w-[45%] min-h-[50%] flex flex-col justify-start items-center gap-5 p-5 bg-black bg-opacity-50 rounded">
          <img
            className="shadow-lg border-black border-2 max-h-[20rem] w-fit"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="profile"
          />
          <p className="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="font-serif md:w-[20%] w-[45%] min-h-[50%] flex flex-col gap-3 justify-start items-center p-5 bg-black bg-opacity-50 rounded">
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
