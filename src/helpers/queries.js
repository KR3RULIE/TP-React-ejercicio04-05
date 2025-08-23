const urltareas = import.meta.env.VITE_API_TAREAS;
// get - post - put - delete

export const leerTareas = async () => {
  try {
    const respuesta = await fetch(urltareas);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerTareaPorID = async (id) => {
  try {
    const respuesta = await fetch(urltareas + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearTareas = async (tareaNueva) => {
  try {
    const respuesta = await fetch(urltareas, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(tareaNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarTareas = async (tareaEditada, id) => {
  try {
    const respuesta = await fetch(urltareas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(tareaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarTareasPorID = async (id) => {
  try {
    const respuesta = await fetch(urltareas + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
