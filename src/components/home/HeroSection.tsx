export default function HeroSection() {
  return (
    <section className="
      bg-white
      w-full
      max-w-7xl
      mx-auto
      sm:px-6 lg:px-10
      py-12
      grid
      grid-cols-1
      md:grid-cols-2
     
      g
    ">
      {/* TEXT */}
      <div>
        <h1 className="
          text-3xl
          
          sm:text-4xl
          lg:text-5xl
          font-bold
          leading-tight
          pt-6 pl-6 md:pt-10
          text-[#111d51]
        ">
          Uniting for Change, <br /> Building a Brighter <br /> Future
        </h1>

        <p className="
          mt-4
          
          text-base
          sm:text-lg
          lg:text-xl
          pl-6
          text-[#111d51]
        ">
          Join us in creating lasting impact through <br className="hidden sm:block" />
          collaboration, compassion, and action.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 pl-6">
          <button className="bg-[#2E8B57] text-white px-6 py-3 rounded-lg">
            What We Do
          </button>
          <button className="border border-[#2E8B57] px-6 py-3 rounded-lg text-[#2E8B57]">
            Play Video
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="
        relative
        w-full
        max-w-[450px]
        h-[380px]
        sm:h-[450px]
        lg:h-[500px]
        mx-auto
      ">
        <img
          src="/images/hero.jpg"
          alt="Happy children"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
    </section>
  );
}
