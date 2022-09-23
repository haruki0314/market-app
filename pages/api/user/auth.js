import jwt from "jsonwebtoken";
const secret_key = "next_market";

const auth = (handler) => {
  return async (req, res) => {
    if (req.method === "GET") {
      return handler(req, res);
    }

    console.log(req);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcnVraTE0NzJAaWNsb3VkLmNvbSIsImlhdCI6MTY2Mzk0MTkxMiwiZXhwIjoxNjY0MDI0NzEyfQ.srxU8IsgvAnjdHljMwsp2Sl0h2UtHt8Pi3tzjEhf0A8";
    // const token = await req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "トークンがありません" });
    }

    try {
      const decoded = jwt.verify(token, secret_key);
      req.body.email = decoded.email;
      return handler(req, res);
    } catch (err) {
      return res
        .status(401)
        .json({ message: "トークンが正しくないので、ログインしてください" }); // 追加
    }
  };
};
export default auth;
