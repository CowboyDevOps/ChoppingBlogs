import { useState } from "react";
import { UserType } from "./lib/types";

async function postUser(dataToSend: UserType) {
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

export const SignUp = () => {
  const [user, setUser] = useState<UserType>({
    username: "",
    password: "",
    email: "",
    displayName: "",
  });

  console.log(user);
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
    if (user?.password?.match(regex)) {
      alert("Password must be complex.");
    } else {
      try {
        await postUser(user);
        alert("Success");
      } catch (error) {
        console.log(error);
        alert("error");
      }
    }
  };
  return (
    <section className="w-screen h-screen bg-gray-200 flex justify-center items-center overflow-clip">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg flex flex-col items-center h-full sm:h-2/3 w-full sm:w-96"
      >
        <div className="w-full flex flex-col items-start ml-14 my-10">
          <h1 className="text-2xl mb-7">Sign Up</h1>
          <label className="mb-2 text-md" htmlFor="username">
            Username
          </label>
          <input
            className="w-10/12 h-8 border shadow-sm"
            type="text"
            name="username"
            id="username"
            value={user?.username}
            onChange={handleChange}
          />
          <label className="mb-2 text-md" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="w-10/12 h-8 border shadow-sm"
            type="text"
            name="displayName"
            id="displayName"
            value={user?.displayName}
            onChange={handleChange}
          />
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
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};
export default SignUp;

// [Required]
// [EmailAddress]
// public string Email { get; set; }
// [Required]
// [RegularExpression("(?=.*\\d)(>=.*[a-z])(?=.*[A-Z]).{4,8}",ErrorMessage ="Password must be complex.")]
// public string Password { get; set; }
// [Required]
// public string DisplayName { get; set; }
// public string Username { get; set; }
