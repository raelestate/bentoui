import Button from "./Button";

function Welcome() {
  return (
    <div className="px-10">
      <div className="pt-36 md:pt-20 md:text-center p-9 lg:text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-center">
          A Bento Style UI at Your Fingertips
          <br />
          <span className="text-orange-800">Kyaraben UI</span>
        </h1>
        <h1 className="text-2sm md:text-4 font-extrabold text-center md:text-center pt-5">
          Made with - <span className="text-blue-400">tailwindcss</span>
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4 pt-4">
          <div className="p-1">
            <Button
              classname="bg-orange-800 p-5 rounded-lg text-cyan-50 font-extrabold w-60 hover:bg-orange-900"
              onClick={() => alert("You clicked the button")}
              children="Get Started"
            />
          </div>
          <div className="p-1">
            <Button
              classname="bg-transparent p-5 rounded-lg text-black font-extrabold w-60 hover:text-orange-950"
              onClick={() => alert("You clicked the button")}
              children="Why Kyaraben?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
