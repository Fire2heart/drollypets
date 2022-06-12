import React from "react";
import "./tagItem.css";

function TagItem({ items, category, setCategory }) {
	return (
		<>
			{items.map(
				(item) =>
					item.parrent_id === null && (
						<div
							key={item.id}
							className={item.name === category.name ? "tag__item selected" : "tag__item"}
							onMouseEnter={() => setCategory(item)}
							// onMouseEnter={(e) => console.log(e)}
						>
							{item.name}
						</div>
					)
			)}
		</>
	);
}

export default TagItem;
