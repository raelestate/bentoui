import Button from "./Button";
import Card from "./Card";

function Welcome() {
  return (
    <div className="px-10">
      <div className="pt-36 md:pt-20 md:text-center p-9 lg:text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-center relative z-10">
            A Bento Style UI at Your Fingertips
            <br />
            <span className="text-orange-800">Kyaraben UI</span>
          </h1>
        </div>

        <h1 className="text-2sm md:text-4 font-bold text-balance md:text-balance pt-5">
          Imagine instead of food, we're talking about ready-made Tailwind CSS
          components. Just as Kyaraben simplifies lunch preparation with its
          artistic and pre-made elements, our website, Kyaraben Components,
          offers a variety of pre-made Tailwind CSS components to simplify and
          enhance your web development projects.
        </h1>
        <h1 className="text-2sm md:text-4 font-extrabold text-center md:text-center pt-5">
          Made with - <span className="text-blue-600">tailwindcss</span>
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4 pt-4">
          <div className="p-1">
            <Button
              classname="bg-orange-800 font-bold hover:font-bold p-5 rounded-lg text-cyan-50 w-60 hover:bg-orange-600 hover:text-black transition ease-in-out"
              onClick={() => alert("You clicked the button")}
              children="Get Started"
            />
          </div>
          <div className="p-1">
            <Button
              classname="bg-transparent p-5 rounded-lg text-black font-extrabold w-60 hover:text-orange-600 transition ease-in-out"
              onClick={() => alert("Why Not?!")}
              children="Why Kyaraben?"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-start pt-5">
          <Card classname="bg-orange-800 p-56 rounded-md"></Card>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
