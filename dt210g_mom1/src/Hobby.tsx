
//Definierar typ för props
interface HobbyProps {     //Interface tillåter beskrivning av vilka props komponenten väntar sig
    name: string;
    year: number;
    read: boolean;
}


//Komponent som tar emot props
const Book = ({ name, year, read }: HobbyProps) => {
    return (
        <div className="book">
            <h1>{name}</h1>
            <p>{year}</p>
            <p>{read ? "Läst" : "Ej läst"}</p>
        </div>
    );
}


//Komponent som itererar över lista
function Hobby() {

    const hobbyArr: HobbyProps[] = [
        { name: "Bok", year: 1979, read: true },
        { name: "Bok", year: 1979, read: true },
        { name: "Bok", year: 1979, read: true }
    ];

    return (
        <div className="hobbyCard">
            <ul>
                {
                    hobbyArr.map((hobby, index) => (
                        <li key={index}>
                            <Book name={hobby.name} year={hobby.year} read={hobby.read} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}



//Skickar titel som prop till komponent
export default Hobby;