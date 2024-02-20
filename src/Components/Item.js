import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useMenuList } from "./useMenuList";

export default function Item({ item }) {
  const [isOpen, subitems, handelClick] = useMenuList(item);

  return (
    <li className="menu-item">
      <button className="btn" onClick={handelClick}>
        {item.children &&
          (isOpen ? (
            <FontAwesomeIcon
              style={{ opacity: 0.3, transition: "0.3s" }}
              icon={faCaretDown}
            />
          ) : (
            <FontAwesomeIcon icon={faCaretRight} />
          ))}
        {item.name}
      </button>
      {item.children && isOpen && (
        <ul className="sub-menu">
          {subitems.map((subitem) => (
            <Item item={subitem} key={crypto.randomUUID()} />
          ))}
        </ul>
      )}
    </li>
  );
}
