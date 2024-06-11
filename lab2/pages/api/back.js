export default  async function back (){
    return (
        <button onClick={api()}>call API</button>
    )
}

async function api() {
    const res = await fetch ("http://127.0.0.1:3000/api/hello");
    const data = res.json();
    console.log(data);
    return data
}