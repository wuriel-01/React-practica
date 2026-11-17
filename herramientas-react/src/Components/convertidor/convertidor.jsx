
import { useState } from "react"
import "./convertidor.css"
const Convertidor = () => {
    const unidades = [
        { valor: "celsius", nombre: "Celsius (°C)" },
        { valor: "fahrenheit", nombre: "Fahrenheit (°F)" },
        { valor: "kelvin", nombre: "Kelvin (K)" }
    ]

    const [temp1, setTemp1] = useState("")
    const [temp2, setTemp2] = useState("celsius")
    const [temp3, setTemp3] = useState("fahrenheit")
    

    const convertirTemperatura = () => {
        if (temp1 === "") {      
            return ""
        }

        const temperatura = Number(temp1)
        let nuevoResultado

        if (temp2 === temp3) {
            nuevoResultado = temperatura

        } else if (temp2 === "celsius" && temp3 === "fahrenheit") {
            nuevoResultado = (temperatura * 9 / 5) + 32

        } else if (temp2 === "celsius" && temp3 === "kelvin") {
            nuevoResultado = temperatura + 273.15

        } else if (temp2 === "fahrenheit" && temp3 === "celsius") {
            nuevoResultado = (temperatura - 32) * 5 / 9

        } else if (temp2 === "fahrenheit" && temp3 === "kelvin") {
            nuevoResultado = (temperatura - 32) * 5 / 9 + 273.15

        } else if (temp2 === "kelvin" && temp3 === "celsius") {
            nuevoResultado = temperatura - 273.15

        } else if (temp2 === "kelvin" && temp3 === "fahrenheit") {
            nuevoResultado = (temperatura - 273.15) * 9 / 5 + 32
        }

        return nuevoResultado
    }
    const resultado = convertirTemperatura()
    
      const simbolos = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    }
   

    const borrarValores = () => {
        setTemp1("")
        setTemp2("celsius")
        setTemp3("fahrenheit")
    }

return (
        <main className="convertidor-container">
            <section className="convertidor-card">

                <div className="convertidor-header">
                    <div className="icono-temperatura">🌡️</div>
                    <span className="subtitulo">HERRAMIENTA DE CONVERSIÓN</span>
                    <h1>Convertidor de temperatura</h1>
                    <p>Convertí temperaturas de forma rápida y sencilla.</p>
                </div>

                <div className="temperatura-input">
                    <label htmlFor="temperatura">Temperatura ingresada</label>
                    <input
                        id="temperatura"
                        type="number"
                        step="any"
                        value={temp1}
                        placeholder="Ej: 25"
                        onChange={(e) => setTemp1(e.target.value)}
                    />
                </div>

                <div className="selectores">
                    <div className="selector-group">
                        <label htmlFor="desde">Convertir desde</label>
                        <select
                            id="desde"
                            value={temp2}
                            onChange={(e) => setTemp2(e.target.value)}
                        >
                            {unidades.map(unidad => (
                                <option key={unidad.valor} value={unidad.valor}>
                                    {unidad.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flecha-conversion">↓</div>

                    <div className="selector-group">
                        <label htmlFor="hasta">Convertir a</label>
                        <select
                            id="hasta"
                            value={temp3}
                            onChange={(e) => setTemp3(e.target.value)}
                        >
                            {unidades.map(unidad => (
                                <option key={unidad.valor} value={unidad.valor}>
                                    {unidad.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="resultado-container">
                    <span>RESULTADO</span>

                    <h2>
                        {resultado === "" || resultado === undefined
                            ? "--"
                            : `${resultado.toFixed(2)} ${simbolos[temp3]}`}
                    </h2>

                    <p>
                        {temp1 !== ""
                            ? `${temp1} ${simbolos[temp2]} equivalen a ${resultado.toFixed(2)} ${simbolos[temp3]}`
                            : "Ingresá una temperatura para comenzar"}
                    </p>
                </div>

                <button className="btn-limpiar" onClick={borrarValores}>
                    ↻ Limpiar valores
                </button>

            </section>
        </main>
    )
}

export default Convertidor
