import Item from "./Item";
export default function Menu({ items }) {
  return (
    <ul className="wrapper">
      {items.map((item) => (
        <Item item={item} key={crypto.randomUUID()} />
      ))}
    </ul>
  );
}
