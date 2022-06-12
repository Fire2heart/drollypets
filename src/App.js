import React from "react";
import "./App.css";
import Header from "./header/Header";
import Product from "./Product/Product";
import Preferences from "./preferences/Preferences";

function App() {
	const products = [
		{
			id: 0,
			name: 'Loving Pets Nitrate Remover Infused Media Pad 10 x 18″ LOVING PETS INC.',
			price: 1337,
			img: 'https://images.prom.ua/2708387237_suhoj-korm-myau.jpg'
		},
		{
			id: 1,
			name: 'API Betta Food Jar .78 oz MARS FISHCARE NORTH',
			price: 69,
			img: 'https://cdn.27.ua/499/6d/d7/355799_1.jpeg'
		},
		{
			id: 2,
			name: 'API 5-in-1 Aquarium Test Strips 100 ct MARS FISHCARE NORTH',
			price: 9000,
			img: 'https://petplus.com.ua/image/cache/catalog/Cat/dry_food/savory/savorycatgourmandfreshturkey_duck-500x500.jpg'
		},
		{
			id: 3,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 4,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 5,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 6,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 7,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 8,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
		{
			id: 9,
			name: 'Loving Pets Acurel ALV2252 Carbon Bag, 52-Pound',
			price: 228,
			img: 'https://masterzoo.ua/content/images/45/480x480l50nn0/korm-dlya-khomyakov-priroda-fiesta-khomyachok-600-g-97577601224347.jpg'
		},
	];

	const [search, setSearch] = React.useState("");
	const [dropMenu, setDropMenu] = React.useState(false);

	return (
		<div style={{overflow: 'hidden'}} className="App">
			<Header
				search={search}
				setSearch={setSearch}
				dropMenu={dropMenu}
				setDropMenu={setDropMenu}
			/>
			<div className="container">
				<Preferences />
				<Product products={products}/>
			</div>
			<footer>
				This is a footer
			</footer>
		</div>
	);
}

export default App;
