import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/dashboard";
    }
  }, []);
  const loginBtn = async () => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        // email: "eve.holt@reqres.in",
        // password: "cityslicka",
      }),
    });
    console.log(response);
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert("Login failed");
    }
  };
  return (
    <div>
     
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue hover:bg-blue-dark text-red-400 font-bold py-2 px-4 rounded"
              type="button"
              onClick={loginBtn}
            >
              Sign In
            </button>
          </div>
        </div>
      
    </div>
  );
}
