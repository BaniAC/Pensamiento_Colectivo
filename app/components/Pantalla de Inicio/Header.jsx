import React from 'react';

export default class Header extends React.Component {
	render(){
		return(

	<header id="main-header">
		
		<a id="logo-header" href="#">
			<span class="site-name">PensamientoColectivo</span>
		</a>
		<div id="log-in">
		<button id="button-log-in">INICIA SESIÓN</button>
		</div>
	</header>
			);
	}

}