import React, { Component } from 'react'
import './Navbar.css'
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
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#"> <i className="fas fa-ruler-combined mr-2"></i>Curran Hardscapes and Masonary</a>
					<button id="toggler" className="navbar-toggler" aria-expanded="false" aria-controls="navbarColor02" aria-label="Toggle navigation" type="button" data-target="#navbarColor02" data-toggle="collapse" onClick={toggleMenu}>
						<span className="navbar-toggler-icon"></span>
					</button>

  				<div className="collapse navbar-collapse" id="navbar-menu">
    				<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">Portfolio</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Make Payment</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact Us</a>
							</li>
					</ul>
  			</div>
				</nav>
     </div>
    )
  }
}
