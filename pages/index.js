import Link from "next/link";
import Image from "next/image";

const ReadAllitems = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="h1-style">こんにちは</h1>
      {props.allItems.map((item) => (
        <Link href={`/item/${item_id}`} key={item._id}>
          <a>
            <Image
              src={item.image}
              width="750px"
              height="500px"
              alt="item-image"
            />
            <div>
              <h2>{item.price}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall");
  console.log(response);
  const allItems = await response.json();
  return {
    props: allItems,
  };
};
export default ReadAllitems;
