const ListaTareas = ({titulo,des,estado,id,eliminarTarea,cambiarEstado}) => {
    return (
        <article className={`tarea-card ${estado ? "completada" : ""}`}>
            <div className="tarea-contenido">
                <div className="tarea-titulo">
                    <h3>{titulo}</h3>

                    <span className={estado ? "estado completado" : "estado pendiente"}>
                        {estado ? "Completada" : "Pendiente"}
                    </span>
                </div>

                <p>{des}</p>
            </div>

            <div className="tarea-acciones">
                <label className="checkbox-container" title="Cambiar estado">
                    <input
                        type="checkbox"
                        checked={estado}
                        onChange={() => cambiarEstado(id)}
                    />
                    <span>Completar</span>
                </label>

                <button
                    className="btn-eliminar"
                    onClick={() => eliminarTarea(id)}
                    title="Eliminar tarea"
                >
                    ✕
                </button>
            </div>
        </article>
    )
}

export default ListaTareas