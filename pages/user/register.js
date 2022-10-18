import { JsonWebTokenError } from "jsonwebtoken";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          Accepst: "application/json",
          "Contet-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("登録失敗");
    }
  };
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e);
          }}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input
          onChange={(e) => {
            console.log(e);
            setEmail(e.target.value);
          }}
          type="text"
          value={email}
          name="password"
          placeholder="メールアドレス"
          required
        />
        <input
          onChange={(e) => {
            console.log(e);
            setPassword(e.target.value);
          }}
          type="text"
          value={password}
          name="password"
          placeholder="パスワード"
          required
        />
        <button>登録</button>
      </form>
    </div>
  );
};
export default Register;
