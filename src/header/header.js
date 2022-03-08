import image from '../cavaleiros-do-zodiaco/header.png';

export const Header = () => {
    return (
        <header className="App-header"
                style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: "10px"}}>
            <img src={image} alt="fonte-de-pokemon" border="0" width="202px" height="118px" style={{
                margin: "20px",
                borderRadius: "10px"
            }}/>
        </header>
    );
};