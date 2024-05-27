// import "./App.css";
import "./app_2.css";

function App() {
  return (
    <>
      <div id="box" className="">
        <div
          id="wrapper"
          className="p-5 border border-gray-500 w-[60%] mt-8 mx-auto my-auto shadow-xl shadow-gray-500"
        >
          <h1 className="text-3xl font-semibold">Learn Web Development</h1>
          {/*<br></br>*/}
          <p className="mb-4 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            officiis impedit. Assumenda, quia! Reprehenderit obcaecati maiores
            rerum
          </p>
          {/*wrapper*/}
          <p className="mt-4 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptates sit repudiandae dolor
            <a href="#" className="text-md mx-2 text-blue-700 underline">
              quidem distinctio at
            </a>
            accusantium officiis voluptatibus laudantium totam, neque dolores
            enim sequi ipsa
          </p>

          <p className="mt-4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptates sit repudiandae dolor quidem distinctio at accusantium
            officiis voluptatibus laudantium totam, neque dolores enim sequi
            ipsa adipisci asperiores fugiat. Vel? Accusantium ipsum minima
            repellendus quas ipsa maiores! Nesciunt ab blanditiis placeat
            reprehenderit quae
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
