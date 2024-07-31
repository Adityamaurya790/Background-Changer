import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="  flex  justify-center  inset-x-0 ">
        <div className=" w-full justify-center gap-3 bg-gray-300 shadow-lg rounded-xl  m-10">
          <button
            class="bg-green-700 text-white rounded-full px-3 py-2 justify-center m-2"
            onClick={() => setColor("green")}
          >
            Green{" "}
          </button>

          <button
            class="bg-red-700 text-white rounded-full px-3 py-2 m-2 "
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            class="bg-blue-700 text-white rounded-full px-3 py-2 m-2"
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>

          <button
            class="bg-yellow-300 text-white rounded-full px-3 py-2 m-2"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

          <button
            class="bg-slate-950 text-white rounded-full px-3 py-2 m-2"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
