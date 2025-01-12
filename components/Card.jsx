"use client";
import React, { Component } from "react";

class Card extends Component {
	render() {
		const { children, className = "" } = this.props;
		return (
			<div
				className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
			>
				{children}
			</div>
		);
	}
}

export default Card;
