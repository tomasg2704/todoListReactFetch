import React from "react";

export function TodoListItem(props) {
	return (
		<>
			<li>
				{props.name}
				<button
					onClick={() => {
						props.onCheck(props.id);
					}}
					className="delete-item-button">
					&times;
				</button>
			</li>
		</>
	);
}
