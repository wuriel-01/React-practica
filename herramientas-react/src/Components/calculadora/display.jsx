


const Display = ({ numero1, numero2, signo, resultado, error }) => {
    return (
        <div className="display">
            <div className="operacion">
                {numero1.join("") || "0"} {signo} {numero2.join("")}
            </div>

            <div className="resultado">
                {resultado !== "" ? resultado : "0"}
            </div>

            <div className="error">
                {error}
            </div>
        </div>
    )
}

export default Display