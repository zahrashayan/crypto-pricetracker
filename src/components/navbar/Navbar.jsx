import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "pkr":
        setCurrency({ name: "pkr", symbol: "₨" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  }

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={logo} alt="Logo" className='logo' />
      </Link>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Why Us</li>
        <li>Choose Plan</li>
        <li>Resources</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="pkr">PKR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt="Arrow" /></button>
      </div>
    </div>
  )
}

export default Navbar

