import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { newFood } from "../../redux/actions/foodActions"
import { loadChild } from "../../redux/actions/childActions"
import styled from "styled-components"

function FoodForm(props) {
	console.log("FoodForm props", props)

	const child = useSelector((state) => state.childReducer)
	const dispatch = useDispatch()

	console.log("child from childReducer", child)

	const [food, setFood] = useState({
		name: "",
		child_id: props.location.state.id,
		type: "fruit",
		servings: 0,
	})

	const handleChange = (event) => {
		setFood({ ...food, [event.target.name]: event.target.value })
	}
	console.log("food from current state", food)
	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(newFood(food))
		dispatch(loadChild(props))
		props.history.push(`/child/${food.child_id}`)
	}

	return (
		<ContainerDiv>
			<form onSubmit={handleSubmit}>
				<h2>Food Name:</h2>
				<input
					type="text"
					name="name"
					placeholder="Food Name"
					value={food.name}
					id="food"
					onChange={handleChange}
				/>

				<h2>Serving Size:</h2>
				<input
					type="number"
					name="servings"
					placeholder="Food Servings"
					value={food.servings}
					id="servings"
					onChange={handleChange}
				/>

				<h2>Food Type:</h2>
				<select name="type" value={food.type} onChange={handleChange} id="type">
					<option value="fruit">fruit</option>
					<option value="vegetable">vegetable</option>
					<option value="whole-grains">whole-grain</option>
					<option value="meat">meat</option>
					<option value="dairy">dairy</option>
					<option value="fats-oils">fats-oils</option>
					<option value="treats">treats</option>
				</select>

				<button type="submit">Submit</button>
			</form>
		</ContainerDiv>
	)
}

export default FoodForm

const ContainerDiv = styled.div`
	form {
		display: flex;
		flex-direction: column;
		width: 20rem;
		margin: 0 auto;
		margin-top: 10rem;

		h2 {
			text-align: left;
			margin-bottom: 0.3rem;
		}

		input {
			font-size: 1.4rem;
			border-radius: 7px;
			border: none;
			padding-left: 0.5rem;
		}

		select {
			font-size: 1.4rem;
			border-radius: 7px;
			border: none;
			padding-left: 0.3rem;
		}

		button {
			font-size: 1.5rem;
			margin-top: 1rem;
			padding: 0.5rem;
			border-radius: 10px;
			border: none;
		}
	}
`
