function Addproducts() {
    const [fetch, setfetch] = useState({
        data: [],
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((fetchData) => {
            setfetch({ data: fetchData });
            console.log(setfetch.fetchData);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <div>
            <p>{posts}</p>
        </div>
    )
}


export default Fetch