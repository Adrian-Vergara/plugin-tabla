$(document).ready(function() {

	/*ARRAY DE OBJETOS PARA REALIZAR PRUEBAS*/
	var cabecera1 = {"id": "Id", "ciudad": "ciudad", "Departamento": "Departamento"}; //Titulos de la tabla
	var contenido1 = [
						{"id": 1, "ciudad": "Valledupar", "Departamento": "Cesar"},
						{"id": 2, "ciudad": "Santa Marta", "Departamento": "Magdalena"},
						{"id": 3, "ciudad": "Barranquilla", "Departamento": "Atlántico"},
						{"id": 4, "ciudad": "Bucaramanga", "Departamento": "Santander"}
				   ];


    /*ARRAY DE OBJETOS PARA REALIZAR PRUEBAS*/				   
    var cabecera2 = {"id": "Id", "ciudad": "ciudad", "Departamento": "Departamento", "Pais": "Pais"}; //Titulos de la cabecera
	var contenido2 = [
						{"id": 1, "ciudad": "Valledupar", "Departamento": "Cesar", "pais": "Colombia"},
						{"id": 2, "ciudad": "Santa Marta", "Departamento": "Magdalena", "pais": "Colombia"},
						{"id": 3, "ciudad": "Barranquilla", "Departamento": "Atlántico", "pais": "Colombia"},
						{"id": 4, "ciudad": "Bucaramanga", "Departamento": "Santander", "pais": "Colombia"},
						{"id": 5, "ciudad": "Cali", "Departamento": "Santander", "pais": "Colombia"}
				   ];

    $("#tabla").cargarTabla(cabecera2, contenido2, "tabla");
});