import React, { useState } from "react";
import useAuth from "../../../utils/useAuth";

const UpdateItem = (props) => {
  const [title, setTitle] = useState(props.singleItem.title);
  const [price, setPrice] = useState(props.singleItem.price);
  const [image, setImage] = useState(props.singleItem.image);
  const [description, setDescription] = useState(props.singleItem.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/item/update/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            price: price,
            image: image,
            description: description,
            email: "",
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
      console.log(jsonData);
      alert("item update success:" + jsonData);
    } catch (e) {
      console.log(e);
      alert("item update failed");
    }
  };
  const loignUser = useAuth();
  if (loignUser === props.singleItem.email) {
    return (
      <div>
        <h1>アイテム更新</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            name="title"
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
          <button>編集</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>権限がありません</h1>
      </div>
    );
  }
};
export default UpdateItem;

// export const getServerSideProps = (context) => {
//   const response = fetch(`http://localhost:3030/api/item/${context.query.id}`);
//   //   const singleItem = await response.json();
//   //   console.log(context);
//   //   return {
//   //     props: singleItem,
//   //   };
// };
export const getServerSideProps = async (context) => {
  //   alert("a");
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  );
  const singleItem = await response.json();
  console.log(singleItem);
  return {
    props: singleItem,
  };
};
