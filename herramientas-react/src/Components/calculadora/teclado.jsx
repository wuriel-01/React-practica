
import { useState } from "react"
import Display from "./display"
import "./teclado.css"
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const operaciones = ["+", "-", "x", "/"]

const Teclado = () => {
    const [numero1, setNumero1] = useState([])
    const [numero2, setNumero2] = useState([])
    const [signo, setSigno] = useState("")
    const [resultado, setResultado] = useState("")
    const [mensajeError, setMensajeError] = useState("")

    const seleccionarNumero = (numero) => {
        if (signo === "") {
            setNumero1([...numero1, numero])
        } else {
            setNumero2([...numero2, numero])
        }
    }

    const seleccionarOperacion = (signo) => {
        setSigno(signo)
    }

    const borrarValores = () => {
        setNumero1([])
        setNumero2([])
        setSigno("")
        setResultado("")
        setMensajeError("")
    }

    const realizarOperacion = () => {
        if (numero1.length === 0 || numero2.length === 0) {
        setMensajeError("Debés ingresar los dos números")
        return
        }

        const valor1 = Number(numero1.join(""))
        const valor2 = Number(numero2.join(""))

        setMensajeError("")

        if (signo === "+") {
            setResultado(valor1 + valor2)

        } else if (signo === "-") {
            setResultado(valor1 - valor2)

        } else if (signo === "x") {
            setResultado(valor1 * valor2)

        } else if (signo === "/") {
            if (valor2 !== 0) {
                setResultado(valor1 / valor2)
            } else {
                setResultado("")
                setMensajeError("No se puede dividir por cero")
            }
        }
    }

    return (
        <main className="calculadora-container">
            <section className="calculadora">

                <header className="calculadora-header">
                    <div className="calculadora-icono">✳</div>
                    <div>
                        <h1>Calculadora</h1>
                        <p>Operaciones matemáticas</p>
                    </div>
                </header>

                <Display
                    numero1={numero1}
                    numero2={numero2}
                    signo={signo}
                    resultado={resultado}
                    error={mensajeError}
                />

                <div className="teclado">
                    {numeros.map((num) => (
                        <button
                            className="btn-numero"
                            key={num}
                            onClick={() => seleccionarNumero(num)}
                        >
                            {num}
                        </button>
                    ))}

                    {operaciones.map((operacion) => (
                        <button
                            className={`btn-operacion ${signo === operacion ? "seleccionada" : ""}`}
                            key={operacion}
                            onClick={() => seleccionarOperacion(operacion)}
                        >
                            {operacion}
                        </button>
                    ))}

                    <button className="btn-borrar" onClick={borrarValores}>
                        AC
                    </button>

                    <button className="btn-igual" onClick={realizarOperacion}>
                        =
                    </button>
                </div>

                <footer className="calculadora-footer">
                    Diseñada para cálculos simples
                </footer>

            </section>
        </main>
    )
}

export default Teclado
