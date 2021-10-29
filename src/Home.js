const Home = () => {
    const handleclick = () => {
        console.log("Hello");
    }
    const handleclickAgain = (name) => {
        console.log("Hello" + name);
    }

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleclick}>Click Me!</button>
            <button onClick={() => handleclickAgain("hafief")}>Click Me!</button>
        </div>
     );
}
 
export default Home;