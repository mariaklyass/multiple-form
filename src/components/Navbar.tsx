const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="ellipse"></div>
      <ul className="navbar_menu">
        <li>
          <a href="#">Доставка и оплата</a>
        </li>
        <li className="active-link">
          <a href="#">Отправить груз</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
