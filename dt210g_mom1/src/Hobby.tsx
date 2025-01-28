
//Definierar typ för props
interface HobbyProps {     //Interface tillåter beskrivning av vilka props komponenten väntar sig
    name: string;
    year: number;
    read: boolean;
}



const book = ({ name, year, read }: HobbyProps) => {
    return (
        <div className="book">
            <h1>{name}</h1>
            <p>{year}</p>
            <p>{read}</p>
        </div>
    );
}


//Skickar titel som prop till komponent
export default book;