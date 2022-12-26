function Address() {
  return (
    <section
      id="address/contact"
      className="bg-gradient-to-b from-orange-900 to-black w-screen h-screen flex  justify-center items-center"
    >
      <div className="container flex justify-between items-center flex-col gap-7">
        <div className=" font-serif">
          <h1 className="text-white">address: 1103 Terry Lane</h1>
          <h1 className="text-white">phone number: 484-426-2349</h1>
        </div>
        <a
          href="https://www.google.dk/maps"
          className="border-4 border-black w-1/2"
        >
          <img src="images\Udklip.PNG" alt="address" />
        </a>
      </div>
    </section>
  );
}

export default Address;
