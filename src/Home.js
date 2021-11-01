import { useState } from "react";

const Home = () => {
// menggunanakan useState untuk menjadikan variable rective terhadap event
const [name, setName] = useState('Hafief'); 
const [age, setAge] = useState(20); 

    const handleclick = () => {
        setName('Maulana');
        setAge(age + 1);
    }

    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={handleclick}>Click Me!</button>
        </div>
     );
}
 
export default Home;