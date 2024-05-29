function SignUp() {
  const handleChange = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email"> Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Signup </button>
      </form>
    </div>
  );
}

export default SignUp;
