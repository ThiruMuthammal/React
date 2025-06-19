import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [dummy, setDummy] = useState(true);
    const [error, setError] = useState(null)

    // useEffect hook
    // When the component is rerender inside the useEffect will execute 
    // We can add the dependency in useEffect
    // json local server command: npx json-server --watch data/dummyData.json --port 3000 --static ./data

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error("No data found.");
                    }
                    console.log(response);
                    return response.json();
                }).then(data => setData(data))
                .catch((error) => {
                    console.log(error.message);
                    setError(error.message);
                })
        }, 1000);
    }, [dummy])
    return [data, setData, dummy, error, setDummy]
}

export default useFetch