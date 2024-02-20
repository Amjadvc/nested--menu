import { useState } from "react";

export function useMenuList(item) {
  const [isOpen, setISOpen] = useState(false);
  const [subitems, setSubItems] = useState([]);

  function handelClick() {
    if (item.children) {
      setISOpen(!isOpen);
      setSubItems(item.children);
    }
  }
  return [isOpen, subitems, handelClick];
}
