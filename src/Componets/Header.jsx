import reactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "core"];
const name = ["pedro", "joao", "marlon", "taise"];


function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

export default function Header (){
    const descriptions = reactDescriptions[genRandomInt(2)]
    const names = name[genRandomInt(3)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>

            <p>
                {descriptions} React concepts you will need for almost any app you are
                going to build!
            </p>
            <p>{names}</p>
        </header>
    );
}