
import { useState, useEffect } from "react"
import Tarjeta from "./tarjeta"
import validacion from "./validacion"
import ListaTareas from "./ListaTareas"
import "./toDoList.css"

const ToDoList = () => {
    const [tareas, setTareas] = useState([])
    const [titulo, setTitulo] = useState("")
    const [des, setDes] = useState("")
    const [filtro, setFiltro] = useState("Todas")

    const crearTarea = () => {
        if (validacion(titulo, des)) {
            const id = crypto.randomUUID()
            const nuevaTarea = new Tarjeta(id, titulo, des)

            setTareas(tareas => [...tareas, nuevaTarea])
            setTitulo("")
            setDes("")
        }
    }

    const eliminarTarea = (id) => {
        setTareas(tareas => tareas.filter(tarea => tarea.id !== id))
    }

    const cambiarEstado = (id) => {
        setTareas(tareas =>
            tareas.map(tarea =>
                tarea.id === id
                    ? { ...tarea, completado: !tarea.completado }
                    : tarea
            )
        )
    }

    const tareasFiltradas = tareas.filter(tarea => {
        if (filtro === "Todas") return true
        if (filtro === "Completadas") return tarea.completado === true
        if (filtro === "Pendientes") return tarea.completado === false
        return true
    })

    useEffect(() => {
        console.log(tareas)
    }, [tareas])

    return (
        <main className="todo-container">
            <header className="todo-header">
                <div>
                    <span className="header-tag">MI ESPACIO DE TRABAJO</span>
                    <h1>Mis tareas</h1>
                    <p>Organizá tus actividades y mantené todo bajo control.</p>
                </div>
                <div className="header-icon">✓</div>
            </header>

            <section className="crear-tarea">
                <h2>Crear nueva tarea</h2>

                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        placeholder="Ej: Terminar proyecto React"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        id="descripcion"
                        placeholder="Escribí una descripción..."
                        value={des}
                        onChange={e => setDes(e.target.value)}
                    />
                </div>

                <button className="btn-crear" onClick={crearTarea}>
                    <span>+</span> Agregar tarea
                </button>
            </section>

            <section className="tareas-section">
                <div className="tareas-header">
                    <div>
                        <h2>Tablero de tareas</h2>
                        <p>{tareas.length} tareas en total</p>
                    </div>

                    <div className="filtros">
                        {["Todas", "Pendientes", "Completadas"].map(opcion => (
                            <button
                                key={opcion}
                                className={filtro === opcion ? "filtro activo" : "filtro"}
                                onClick={() => setFiltro(opcion)}
                            >
                                {opcion}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lista-tareas">
                    {tareasFiltradas.length > 0 ? (
                        tareasFiltradas.map(tarea => (
                            <ListaTareas
                                key={tarea.id}
                                titulo={tarea.titulo}
                                des={tarea.descripcion}
                                estado={tarea.completado}
                                id={tarea.id}
                                eliminarTarea={eliminarTarea}
                                cambiarEstado={cambiarEstado}
                            />
                        ))
                    ) : (
                        <div className="sin-tareas">
                            <span>📋</span>
                            <h3>No hay tareas para mostrar</h3>
                            <p>Creá una tarea o seleccioná otro filtro.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default ToDoList
