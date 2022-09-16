// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req, res) => {
  //status 200は正常終了の意味
  console.log(req.body);
  res.status(200).json({ message: "こんにちは", name: "春希" });
};
export default hello;
