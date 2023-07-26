import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <button className="sidebar-button">Кнопка 1</button>
        </li>
        <li>
          <button className="sidebar-button">Кнопка 2</button>
        </li>
        <li>
          <button className="sidebar-button">Кнопка 3</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
