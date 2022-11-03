import Head from "next/head";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://market-app-g1bj.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const jsonData = await response.json();
      alert("success" + jsonData);
      console.log("ここまできてる？" + jsonData);
      localStorage.setItem("token", jsonData.token);
    } catch (err) {
      alert(err);
      console.log(err);
      alert("ログイン失敗");
    }
  };
  return (
    <div>
      <header>へったー</header>
      <Head>
        <title>login</title>
      </Head>
      <h1 className="page-title">login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="メールアドレス"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          neme="password"
          placeholder="パスワード"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>ログイン</button>
      </form>
      <footer>フッター</footer>
    </div>
  );
};

export default Login;
