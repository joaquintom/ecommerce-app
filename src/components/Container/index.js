
const estilos = {
    
    borderWidth: "5px",
    borderColor:"#f00",
    borderStyle: "solid",
    padding: "40",
    margin: "40",
    fontSize: "3rem",

};

function Container(props){
    return (
        <div style={estilos}>
        {props.texto}
        </div>
        );
}

//exportame por defecto container:
export default Container;