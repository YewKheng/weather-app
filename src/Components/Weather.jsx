export const Weather = ({ data }) => {
	return (
		<div className="absolute flex flex-col justify-between self-center max-w-[500px] w-full h-[80vh] m-auto p-4 text-gray-300 z-10">
			<div className="flex justify-between pt-5">
				<div className="flex flex-col items-center">
					<img
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="Weather Icon"
					/>
					<p className="text-2xl">{data.weather[0].main}</p>
				</div>
				<p className="text-8xl">{data.main.temp.toFixed(0)}&#176;</p>
			</div>
			<div className="bg-black/50 p-8 rounded-md">
				<p className="text-2xl text-center pb-6">Weather in {data.name}</p>
				<div className="flex flex-col justify-between text-center gap-3">
					<div className="flex justify-between">
						<p className="text-xl">Feels Like</p>
						<p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}&#176;</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xl">Humidity</p>
						<p className="font-bold text-2xl">{data.main.humidity}%</p>
					</div>
					<div className="flex justify-between">
						<p className="text-xl">Winds</p>
						<p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} KMH</p>
					</div>
				</div>
			</div>
		</div>
	);
};
