function SignUp() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          ></input>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
