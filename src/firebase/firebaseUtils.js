
export const get_Fecha = () => {
    const date = new Date()
    const fecha_dia = date.getDate().toString();
    const fecha_mes = date.getMonth()+1;
    const fecha_anio = date.getFullYear().toString();
    const fecha = `${fecha_dia}:${fecha_mes.toString()}:${fecha_anio}`;
    
    const horas = date.getHours().toString();
    const minutos = date.getMinutes().toString();
    const segundos = date.getSeconds().toString();
    const hora = `${horas}:${minutos}:${segundos}`;
    
    return { fecha, hora }
}