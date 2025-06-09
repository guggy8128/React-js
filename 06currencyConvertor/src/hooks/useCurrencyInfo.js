import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);  // Set initial state to null for clarity

    useEffect(() => {
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Fetched data:", res[currency]);
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setData(null);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
