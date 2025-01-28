
//Definierar typ för props
interface TitleProps {     //Interface tillåter beskrivning av vilka props komponenten väntar sig
    name: string;
}




const Title = ({ name }: TitleProps) => {
    return (
        <div className="title">
            <h1>{name}</h1>
        </div>
    );
}

export default Title;