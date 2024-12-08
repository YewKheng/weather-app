import axios from "axios";
import { useState } from "react";
import { SearchIcon } from "./Components/SearchIcon";
import { Weather } from "./Components/Weather";

export const App = () => {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState("");

	const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
		import.meta.env.VITE_WEATHER_API_KEY
	}`;

	const fetchWeather = (event) => {
		event.preventDefault();

		axios.get(weatherAPI).then((response) => {
			setWeather(response.data);
		});
		setCity("");
	};

	return (
		<div className=" relative flex justify-center overflow-hidden">
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />
			<img
				src="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Fog Landscape"
				className="object-cover w-full h-screen"
			/>
			<div className="absolute flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
				<form
					onSubmit={fetchWeather}
					className="flex justify-between items-center w-full m-auto p-3 bg-transparent border-2 border-gray-300 text-white rounded-2xl">
					<div>
						<input
							onChange={(event) => setCity(event.target.value)}
							className="bg-transparent border-none text-gray-200 focus:outline-none text-2xl placeholder:opacity-50"
							type="text"
							placeholder="Search City"
						/>
					</div>
					<button onClick={fetchWeather}>
						<SearchIcon />
					</button>
				</form>
			</div>
			{weather.main && <Weather data={weather} />}
		</div>
	);
};
