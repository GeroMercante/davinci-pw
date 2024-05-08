# Detalles de la entrega.
- Clinica Medio - Medical Services. Inspirado en [Medical Landing Page](#https://www.behance.net/gallery/184690023/Medical-landing-page-website?tracking_source=search_projects|+medical+website&l=114)
- Alumno: Gerónimo Mercante.
- Temática: Sistema de Gestión de Clínica Médica.
- Fecha de entrega: [10/05/2024]
- Diagrama: Imagen adjunta al proyecto y también el .mwb creado en el workbench.

# CASOS DE USO #
- El sitio cuenta con una landing inicial presentando los servicios de Medio (titulo escogido para la tematica).
## Árbol de navegación
- Desde el navbar, vamos a poder acceder a "iniciar sesión" o registrarse, en esas respectivas vistas, podremos acceder al dashboard ADMINISTRADOR haciendo click
en registrarse o iniciar sesión, no hace falta llenar los inputs.
- Cuando accedemos al ADMIN DASHBOARD, vamos a tener un sidebar a su izquierda, pudiendo contemplar dos accesos al portal paciente(cliente) y médico. 
## DASHBOARD PACIENTE
- En el portal del paciente podemos notar un calendario desde el inicio con turnos confirmados y turnos pendientes de confirmación, luego un historial de turnos.
- Además, esta la opcion "Historial clinico" en el sidebar, que al hacerle click refresca el DOM cargando el historial clinico del paciente con unos filtros incluidos.
## DASHBOARD MÉDICO
- El dashboard médico está más pensado para la segunda parte, asi que de momento tiene esa única vista, los próximos turnos del médico, un historial de turno, y se va 
a implementar posteriormente un historial clinico que el medico ha hecho a sus diversos pacientes y demás.

# Objetivo
  Desarrollar la interfaz HTML para un sistema de gestión, eligiendo entre dos opciones: uno
  destinado a una clínica médica y otro para un instituto educativo. El enfoque se centrará en la
  visualización de datos y la interacción del usuario.

### Descripción:
  En este trabajo práctico, los estudiantes tendrán la tarea de elegir uno de los dos sistemas
  de gestión propuestos y crear la interfaz HTML correspondiente. El objetivo principal es
  diseñar una interfaz intuitiva y funcional que permita a los usuarios realizar diversas
  acciones según las necesidades del sistema seleccionado.

## Diseño Fron End.

### Opción 1: Sistema de Gestión de Clínica Médica:
- Página de Login y Registro: Diseñar una página para un login de usuario y otra para registrar usuario.
- Página de Inicio: Diseñar una página de inicio que presente las opciones principales del sistema, como "Pedir Turno" y "Ver Historias Clínicas".
- Formulario de Pedido de Turno: Crear un formulario interactivo que permita a los usuarios solicitar turnos especificando la fecha, hora y médico deseado.
- Visualización de Historias Clínicas: Diseñar una interfaz para que los profesionales médicos puedan acceder a las historias clínicas de los pacientes, mostrando información relevante de manera clara y ordenada.

### Requerimientos Técnicos:
- Utilizar HTML5 para la estructura de las páginas.
- Emplear CSS para estilizar y dar formato a los elementos.
- Considerar la usabilidad y accesibilidad en el diseño de las interfaces.
- No es necesario implementar funcionalidades de backend en este parcial, solo
enfocarse en la interfaz y la estructura de la base de datos.

## Diseño de Base de datos 

###  Sistema de Gestión Clínica Medica:
 - [entity] Usuario:
        [Atributos]: ID_Usuario (PK), Nombre_Usuario, Contraseña, Rol.

 - [entity] Paciente:
        [Atributos]: ID_Paciente (PK), Nombre, Apellido, Fecha_Nacimiento, Teléfono, Dirección, ID_Usuario (FK).

 - [entity] Médico:
        [Atributos]: ID_Médico (PK), Nombre, Apellido, Especialidad, Teléfono, ID_Usuario (FK).

 - [entity] Turno:
        [Atributos]: ID_Turno (PK), Fecha, Hora, ID_Paciente (FK), ID_Médico (FK).

 - [entity] Historia Clínica:
        [Atributos]: ID_Historia (PK), ID_Paciente (FK), ID_Médico (FK), Diagnóstico, Tratamiento, Fecha_Creación.

### Relaciones:
- Cada paciente o médico está asociado a un único usuario (relación uno a uno entre Usuario y Paciente/Médico).
- Un paciente puede tener muchos turnos (relación uno a muchos entre Paciente y Turno).
- Un médico puede tener muchos turnos (relación uno a muchos entre Médico y Turno).
- Cada turno está asociado a un único paciente y un único médico (relación uno a uno entre Turno, Paciente y Médico).
- Cada paciente puede tener una o varias historias clínicas (relación uno a muchos entre Paciente y Historia Clínica).
- Cada médico puede tener una o varias historias clínicas (relación uno a muchos entre Médico y Historia Clínica).

