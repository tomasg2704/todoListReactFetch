import React, { useState, useEffect } from "react";
import { TodoListItem } from "./TodoListItem";

import "./TodoList.css";

export function TodoList() {
	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/tomasg2704", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				//console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				setItems(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	useEffect(
		() => {
			//if (input != "") {
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/tomasg2704",
				{
					method: "PUT",
					body: JSON.stringify(items),
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
				.then(resp => {
					console.log(resp.ok); // will be true if the response is successfull
					console.log(resp.status); // the status code = 200 or code = 400 etc.
					//console.log(resp.text()); // will try return the exact result as string
					return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
				})
				.then(data => {
					//here is were your code should start after the fetch finishes
					console.log(data); //this will print on the console the exact object received from the server
				})
				.catch(error => {
					//error handling
					console.log(error);
				});
			//}
		},
		[items]
	);

	function addItem(event) {
		setItems([...items, { label: input, done: false }]);
		setInput("");
	}

	function removeItem(id) {
		setItems(items => {
			return items.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className="todolist">
			<div className="heading">
				<h1 className="title">To-Do List</h1>
			</div>
			<input
				type="text"
				value={input}
				onChange={event => {
					setInput(event.target.value);
				}}
			/>
			<button onClick={addItem}>Add</button>

			<div className="items">
				<ul>
					{items.map((item, index) => (
						<TodoListItem
							key={index}
							id={index}
							name={item.label}
							onCheck={removeItem}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}
