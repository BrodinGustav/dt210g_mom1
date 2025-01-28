import "./Hobby.css";


//Definierar typ för props
interface HobbyProps {     //Interface tillåter beskrivning av vilka props komponenten väntar sig
    name: string;
    author: string;
    year: number;
    read: boolean;
}


//Komponent som tar emot props
const Book = ({ name, author, year, read }: HobbyProps) => {
    return (
        <div className="book">
            <h2>Title: {name}</h2>
            <p>Författare: {author}</p>
            <p>Utgivningsår: {year}</p>
            <p>Läst: {read ? "Läst" : "Ej läst"}</p>
        </div>
    );
}


//Komponent som itererar över lista
function Hobby() {

    const hobbyArr: HobbyProps[] = [
        { name: "Bok", author: "författare", year: 1979, read: true },
        { name: "Bok", author: "författare", year: 1979, read: true },
        { name: "Bok", author: "författare", year: 1979, read: true }
    ];

    return (
        <div>
            <ul>
                {
                    hobbyArr.map((hobby, index) => (
                            <li key={index}>
                                <Book name={hobby.name} author={hobby.author} year={hobby.year} read={hobby.read} />
                            </li>
                    ))
                }
            </ul>
        </div>
    );
}



//Skickar titel som prop till komponent
export default Hobby;