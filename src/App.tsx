import Input from "@mui/base/Input";

function App() {
  return (
    <div className="flex w-full justify-center pt-12">
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <Input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-xs italic text-red-500">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
