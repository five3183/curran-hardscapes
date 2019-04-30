import React, { Component } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

import Icon from '../../assets/images/Capture1.png'

export default class Navbar extends Component {
  render() {

		const toggleMenu = (e) => {
			e.preventDefault()
			const navbarMenu = document.getElementById('navbar-menu')
			navbarMenu.classList.forEach(token => {
				if (token === 'show'){
					navbarMenu.classList.remove('show')
				}
				else {
					navbarMenu.classList.add('show')
				}
			});
		}

    return (
     <div id="nav-container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
					<Link className="navbar-brand" to="/"><img id='icon' src={Icon}/>Curran's Hardscapes and Masonary
					</Link>
					<button id="toggler" className="navbar-toggler" aria-expanded="false" aria-controls="navbarColor02" aria-label="Toggle navigation" type="button" data-target="#navbarColor02" data-toggle="collapse" onClick={toggleMenu}>
						<span className="navbar-toggler-icon"></span>
					</button>

  				<div className="collapse navbar-collapse" id="navbar-menu">
    				<ul className="navbar-nav ml-auto">
						<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/portfolio">
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="review_us">
									Review Us
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/payment">
									Make Payment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact Us
								</Link>
							</li>
					</ul>
  			</div>
				</nav>
     </div>
    )
  }
}
