import Button from "./Button";
import Card from "./Card";

function Welcome() {
  return (
    <div className="px-10">
      <div className="pt-36 md:pt-20 md:text-center p-9 lg:text-center">
        <div className="relative">
          <Card classname="absolute bg-purple-600/85 z-0 rounded-xl shadow-lg w-10 h-10 lg:w-[26rem] lg:px-[10rem] lg:ps-14 lg:h-16" />
          <Card classname="absolute bg-purple-600/85 z-0 rounded-xl shadow-lg w-10 h-10 lg:w-[25rem] lg:h-16 mt-20" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-center relative z-10">
            A Bento Style UI at Your Fingertips
            <br />
            <span className="text-orange-800">Kyaraben UI</span>
          </h1>
        </div>

        <h1 className="text-2sm md:text-4 font-extrabold text-center md:text-center pt-5">
          Made with - <span className="text-blue-600">tailwindcss</span>
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4 pt-4">
          <div className="p-1">
            <Button
              classname="bg-orange-800 p-5 rounded-lg text-cyan-50 font-   w-60 hover:bg-orange-900"
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
        <div className="flex flex-wrap justify-center">
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
          <Card classname="bg-purple-600 rounded-xl shadow-lg w-10 h-16 p-6 m-2"></Card>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
