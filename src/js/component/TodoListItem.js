import React from "react";

export function TodoListItem(props) {
	return (
		<>
			<li>
				{props.item}
				<button
					onClick={() => {
						props.onCheck(props.id);
					}}
					className="delete-item-button">
					x
				</button>
			</li>
		</>
	);
}
