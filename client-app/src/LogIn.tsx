import { useState } from "react";
import { LogInType, UserType } from "./lib/types";
async function postUser(dataToSend: LogInType) {
  const headers = { "Content-type": "application/json" };
  const response = await fetch(`http://localhost:5000/api/account/register`, {
    method: "POST",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(dataToSend),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export const LogIn = () => {
  const [user, setUser] = useState<LogInType>({
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    const regex = "(?=.*\\d)(>=.*[a-z])(?=.*[A-Z]).{4,8}";
    e.preventDefault();
    try {
      await postUser(user);
      alert("Success");
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };
  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center overflow-clip">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg flex flex-col items-center h-full sm:h-2/3 w-full sm:w-96"
      >
        <div className="w-full flex flex-col items-start ml-14 my-10">
          <h1 className="text-2xl mb-7">Welcome Back</h1>
          <label className="mb-2 text-md" htmlFor="email">
            Email
          </label>
          <input
            className="w-10/12 h-8 border shadow-sm"
            type="email"
            name="email"
            id="email"
            value={user?.email}
            onChange={handleChange}
          />
          <label className="mb-2 text-md" htmlFor="password">
            Password
          </label>
          <input
            className="w-10/12 h-8 border shadow-sm"
            type="password"
            name="password"
            id="password"
            value={user?.password}
            onChange={handleChange}
          />
          <button
            className="mt-10 w-5/6 h-10 rounded-xl shadow-lg bg-red-400 hover:bg-red-500"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
    </section>
  );
};
export default LogIn;
