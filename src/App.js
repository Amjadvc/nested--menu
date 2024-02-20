import "./myApp.css";
import Menu from "./Components/Menu";

const tree = [
  {
    name: "Menu 1",
    children: [
      {
        name: "Sub Menu 1",
        children: [{ name: "Sub Sub Menu 1" }],
      },
      { name: "Sub Menu 1" },
    ],
  },
  {
    name: "Menu 2",
    children: [
      { name: "Sub Menu 2" },
      {
        name: "Sub Menu 2",
        children: [{ name: "Sub Sub Menu 2" }, { name: "Sub Sub Menu 2" }],
      },
    ],
  },
];

export default function App() {
  return (
    <div className="app">
      <Menu items={tree} />
    </div>
  );
}
