import { useState } from "react";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: title,
          price: price,
          image: image,
          description: description,
        }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      alert("item crete success:" + jsonData);
    } catch (e) {
      console.log(e);
      alert("item create failed");
    }
  };
  return (
    <div>
      <h1>アイテム作成</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          name="tile"
          placeholder="アイテム名"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={price}
          name="price"
          placeholder="価格"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={image}
          name="image"
          placeholder="画像"
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          type="text"
          value={description}
          name="description"
          rows="15"
          placeholder="商品説明"
          required
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>作成</button>
      </form>
    </div>
  );
};
export default CreateItem;
