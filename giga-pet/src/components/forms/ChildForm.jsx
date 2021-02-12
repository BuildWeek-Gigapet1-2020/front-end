import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { newChild } from "../../redux/actions/childActions"

import styled from "styled-components"

import logo from "../../images/giga-pet-logo.png"
import orange from "../../images/mon-orange-two.png"
import red from "../../images/mon-red-four.png"
import green from "../../images/mon-teal-one.png"
import purple from "../../images/mon-purple.png"

function ChildForm(props) {
	console.log("ChildForm props", props)
	const dispatch = useDispatch()

	const [child, setChild] = useState({
		name: "",
		monster_id: 1,
	})

	const handleChange = (event) => {
		setChild({ ...child, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (child.name.length >= 1) {
			dispatch(newChild(child, props))
		} else {
			alert("Name field is required")
		}
	}

	return (
		<ContainerDiv>
			<form onSubmit={handleSubmit}>
				{/* <div className="btn-group"> */}
				<input
					name="name"
					placeholder="Child Name"
					type="text"
					value={child.name}
					onChange={handleChange}
				/>
				<select
					name="monster_id"
					value={child.monster_id}
					onChange={handleChange}
				>
					<option value="1" label="Orange Monster" />
					<option value="2" label="Red Monster" />
					<option value="3" label="Green Monster" />
					<option value="4" label="Purple Monster" />
				</select>

				<button type="submit">Submit</button>
				{/* </div> */}

				<div className="monsters">
					<img src={orange} alt="" className="monster" />
					<img src={red} alt="" className="monster" />
					<img src={purple} alt="" className="monster purple" />
					<img src={green} alt="" className="monster" />
				</div>
			</form>
		</ContainerDiv>
	)
}

export default ChildForm

const ContainerDiv = styled.div`
	form {
		display: flex;
		flex-direction: column;
		width: 75%;
		margin: 0 auto;
		padding-top: 2%;

		// .btn-group {
		//   padding: 0px;
		//   display: flex;
		//   flex-direction: column;
		// }

		input {
			font-size: 1.5rem;
			// width: 40%;
			margin: 2%;
			padding: 2%;
			border-radius: 12px;
			border: none;
		}

		select {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			margin-bottom: 2%;
			background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
				no-repeat right #fff;
			background-position-x: 98%;
			margin: 2%;
			padding: 3%;
			font-size: 1rem;
			border-radius: 12px;
			border: none;
		}

		button {
			width: 40%;
			height: 58px;
			margin: 0 auto;
			font-family: "Bubblegum Sans", cursive;
			background-color: #74b456;
			border: 2px solid #4b8f29;
			border-radius: 10px;
			color: white;
			font-size: 2rem;
			-webkit-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
			-moz-box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
			box-shadow: 3px 11px 22px 0px rgba(72, 119, 61, 1);
		}

		.monsters {
			margin-top: 7%;

			.monster {
				width: 25%;
			}

			.purple {
				width: 17%;
			}
		}
	}
`
