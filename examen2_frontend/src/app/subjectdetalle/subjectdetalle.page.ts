import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Student} from '../models/student'
import {Subjects} from '../models/subject';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import {ServiceService} from '../service/service.service'
import { PathLocationStrategy } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import { stringify } from '@angular/compiler/src/util';
import { element } from 'protractor';

declare var M: any;


@Component({
  selector: 'app-subjectdetalle',
  templateUrl: './subjectdetalle.page.html',
  styleUrls: ['./subjectdetalle.page.scss']
})
export class SubjectdetallePage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute,private frombuilder: FormBuilder, private escuelaservice: ServiceService, private router: Router) { }
submited = false;
Asignatura: Subjects;
nameAsi: string;
crearAlumnForm: FormGroup;
alumnoañadido: Student;
listaalum: Student[];
alumnoasi: Student;
protected listatodos: Student[] = [];

  
  ngOnInit() {
   

    this.activatedRouter.params.subscribe(params => {
      if (typeof params['name'] !== 'undefined') {
        this.nameAsi = params['name'];
      } else {
        this.nameAsi = "No funciono >:C";
      }
    });

    this.getSubject(this.nameAsi);


  }

  onSubmit(crearAlumn: NgForm) {
    this.submited = true;
   
    // stop here if form is invalid
    //if (this.crearAlumnForm.invalid) {
        //return;
    //}
    this.AñadirStudent(crearAlumn);
  }

  getSubject(nameAsi:string){

    this.escuelaservice.getSubject(nameAsi)

    .subscribe(res => 
      {
        this.Asignatura = res as Subjects;
      this.recuperaralumnos(this.Asignatura.students);
      })

      
  }

  getStudent(namestudent:string){

    this.escuelaservice.getStudent(namestudent)

    .subscribe(res => 
      {
        this.alumnoasi = res as Student;
        this.listatodos.push(this.alumnoasi);
      })


    }

recuperaralumnos(listanom1:string []){

listanom1.forEach(element =>{

  if (element == null || element == '')
  {}
  else{
  this.getStudent(element);
  }
});


}
  
AñadirStudent(crearAlumn: NgForm){
  this.alumnoañadido = new Student();
  this.alumnoañadido.name = crearAlumn.value.name;
 
  this.escuelaservice.AñadirStudent(this.nameAsi, this.alumnoañadido)
  .subscribe(res => {
         
    M.toast({html: 'Añadid0'})
})

}









get f() { return this.crearAlumnForm.controls; }



}