import React from "react";
import TagItem from "./TagItem";
import TagData from "./TagData";
import { CSSTransition } from "react-transition-group";
import "./dropMenu.css";

function DropMenu({ dropMenu, setDropMenu }) {
	const items = [
		{
			id: 0,
			parrent_id: null,
			name: "Dogs",
		},
		{
			id: 1,
			parrent_id: null,
			name: "Cats",
		},
		{
			id: 2,
			parrent_id: null,
			name: "Fish",
		},
		{
			id: 3,
			parrent_id: null,
			name: "Birds",
		},
		{
			id: 4,
			parrent_id: null,
			name: "Reptile",
		},

		{
			id: 5,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 6,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 20,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 21,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 22,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 23,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 24,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 25,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 26,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 27,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 28,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 29,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 30,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 31,
			parrent_id: 0,
			name: "Meat food",
		},
		{
			id: 32,
			parrent_id: 0,
			name: "Frozen food",
		},
		{
			id: 33,
			parrent_id: 0,
			name: "Meat food",
		},

		{
			id: 7,
			parrent_id: 1,
			name: "Non-meat food",
		},
		{
			id: 8,
			parrent_id: 1,
			name: "Food supplements",
		},
		{
			id: 9,
			parrent_id: 2,
			name: "Frozen food",
		},
		{
			id: 10,
			parrent_id: 2,
			name: "Meat food",
		},
		{
			id: 11,
			parrent_id: 3,
			name: "Non-meat food",
		},
		{
			id: 12,
			parrent_id: 3,
			name: "Food supplements",
		},
	];

	const [category, setCategory] = React.useState(items[0]);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const result = items.filter((item) => item.parrent_id === category.id);
		setData(result);
	}, [category]);

	return (
		<CSSTransition
			in={dropMenu}
			timeout={300}
			classNames="myDropMenu"
			unmountOnExit
		>
			<div className="menu__wrapper">
				<section className="dropMenu">
					<div className="tag">
						<TagItem
							items={items}
							category={category}
							setCategory={setCategory}
						/>
					</div>
					<div className="data">
						<TagData data={data} />
					</div>
				</section>
			</div>
		</CSSTransition>
	);
}

export default DropMenu;
