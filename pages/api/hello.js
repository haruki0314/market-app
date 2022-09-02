// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //status 200は正常終了の意味
  res.status(200).json({ message: "こんにちは", name: "春希" });
}
