export default function CardHeader() {
  return (
    <>
      <h1 className="-mt-3 text-[2rem] sm:text-3xl text-gc-titles font-bold">
        Garcel Code
      </h1>
      <img src="/images/profile.jpg" className="w-32 m-auto rounded-full" />
      <p className="text-center text-gc-text text-sm italic">
        Front-End Web Developer
      </p>
      <p className="text-center text-gc-text text-sm mb-3">
        Currently working at <b>ezaudita</b>
      </p>
    </>
  )
}
