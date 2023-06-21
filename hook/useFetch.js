import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		params: { ...query },
		headers: {
			"X-RapidAPI-Key": "a9bba17833mshe7da8ba9fb7f682p143788jsn70e90ee5af8f",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			alert("there is an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// a refetch to set is loading to true when you want to call it again
	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
