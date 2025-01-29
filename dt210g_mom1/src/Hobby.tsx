import "./Hobby.css";


//Definierar typ för props
interface HobbyProps {     //Interface tillåter beskrivning av vilka props komponenten väntar sig
    name: string;
    author: string;
    year: number;
    read: boolean;
}


//Komponent för enskild bok som tar emot props.
const Book = ({ name, author, year, read }: HobbyProps) => {
    return (
        <div className="book">
            <h2><strong>Title:</strong> {name}</h2>
            <p><strong>Författare:</strong> {author}</p>
            <p><strong>Utgivningsår:</strong> {year}</p>
            <p><strong>Läst:</strong> {read ? "Läst" : "Ej läst"}</p>
        </div>
    );
}


//Komponent som itererar över lista
function Hobby() {

    const hobbyArr: HobbyProps[] = [
        { name: "Profeten och Idioten", author: "Jonas Jonasson", year: 2022, read: true },
        { name: "Analfabeten som kunde räkna", author: "Jonas Jonasson", year: 2013, read: true },
        { name: "Hundraåringen som klev ut genom fönstret och försvann", author: "Jonas Jonasson", year: 2009, read: true },
        { name: "Hundraettåringen som tänkte att han tänkte för mycket (2018)", author: "Jonas Jonasson", year: 2018, read: false },
        { name: "Mördar-Anders och hans vänner (samt en och annan ovän)", author: "Jonas Jonasson", year: 2015, read: false }
    ];

    return (
        <div>
            <ul>
                {
                    //Renderar listan 
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