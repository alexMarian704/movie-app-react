import { useEffect, useState } from "react";

function useFetch(url, result, array ,search) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${url}`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (result) {
                    setData(data.results)
                    // console.log(data.results)
                } else if (array) {
                    setData(data.cast)
                    // console.log(data.cast)
                } else {
                    setData(data)
                    // console.log(data)
                }
            })
            .catch((err) => {
                setError(err);
                console.error(err)
            })
    }, [search])

    return { data, error }
}

export default useFetch;
