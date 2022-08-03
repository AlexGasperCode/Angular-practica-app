import { Component } from '@angular/core';

@Component ({ 
    selector: 'mi-componente',  //Directiva de selección
    templateUrl: './mi-componente.component.html', //Archivo HTML 
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Interpolación de componentes";  //Le damos un valor
        this.comentario = "Interpolación de componente comentario en h2 y es chido";
        this.year = 2020;

        console.log("Hola mundo componente");
        console.log(this.titulo , this.comentario, this.year); //Imprimimos los valores
    }
}