import React, { useState, useEffect } from "react";
import './style.css';

function CourseView() {
  const [course, setCourse] = useState({
    name: "",
    category: "",
    summary: "",
    description: "",
    objectives: "",
    targetAudience: "",
    content: "",
    duration: "",
    numberOfLessons: "",
    format: "",
    technicalRequirements: "",
    certificateInformation: "",
    price: "",
    institutionInformation: "",
    instructorInformation: "",
    studentSupport: ""
  });

  useEffect(() => {
    setCourse(JSON.parse(localStorage.getItem('course')));
  }, []);

  return (
    <div className="course-view p-5 pt-0 pb-0" >
      {/* Curso Cadastrado */}
      {
        course.name !== '' && (
          <div className="container">
            <div className="row">
            <div className="col-12">
              <h1>{course.name}</h1>
              </div>
              <div className="col-md-6">
                <p className="course-item"><strong>Nome do curso: </strong><br/>{course.name}</p>
                <p className="course-item"><strong>Categoria: </strong><br/>{course.category}</p>
                <p className="course-item"><strong>Descrição resumida: </strong><br/>{course.summary}</p>
                <p className="course-item"><strong>Descrição detalhada: </strong><br/>{course.description}</p>
                <p className="course-item"><strong>Objetivos do curso: </strong><br/>{course.objectives}</p>
                <p className="course-item"><strong>Público-alvo: </strong><br/>{course.targetAudience}</p>
                <p className="course-item"><strong>Conteúdo programático: </strong><br/>{course.content}</p>
                <p className="course-item"><strong>Duração do curso: </strong><br/>{course.duration}</p>

              </div>
              <div className="col-md-6">
              <p className="course-item"><strong>Número de aulas ou módulos: </strong><br/>{course.numberOfLessons}</p>
              <p className="course-item"><strong>Formato das aulas: </strong><br/>{course.format}</p>
              <p className="course-item"><strong>Requisitos técnicos para acesso ao curso: </strong><br/>{course.technicalRequirements}</p>
              <p className="course-item"><strong>Informações sobre certificado: </strong><br/>{course.certificateInformation}</p>
              <p className="course-item"><strong>Preço do curso: </strong><br/>{course.price}</p>
              <p className="course-item"><strong>Informações sobre a instituição responsável pelo curso: </strong><br/>{course.institutionInformation}</p>
              <p className="course-item"><strong>Dados do instrutor ou professores: </strong><br/>{course.instructorInformation}</p>
              <p className="course-item"><strong>Suporte ao aluno: </strong><br/>{course.studentSupport}</p>
              </div>
            </div>
          </div>)
      }

      {/* Nenhum Curso Cadastrado */}
      {
        course.name === '' && (
          <div className="form-container">
            Nenhum curso cadastrado...
          </div>)
      }


    </div>
  );
};

export default CourseView;
