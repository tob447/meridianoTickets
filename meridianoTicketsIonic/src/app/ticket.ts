export class Ticket{
    Nombre_Lider:string;
    Id_Maquina:string;
    Causa:string;
    Solucion:string;
    Hora_Apertura:string;
    Hora_Cierre:string;
}

export class Codigo{
    id:string;
    codigo:string;
    descripcion:string;
    Opsiguiente:string;
    Activo:boolean;
    Paros_Grupos_fk:string;
    Oee:boolean;
    Disponibilidad:boolean;
    Eficiencia:boolean;
    ParoPreparacionProducto:boolean;
    DefinicionParos:string
}