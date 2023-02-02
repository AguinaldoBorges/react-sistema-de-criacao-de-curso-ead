import React, { useState, useEffect } from "react";
import './style.css';
import CreateCourseForm from "../../components/CreateCourseForm";


function CourseView() {
  return (
    <div className="home container-fluid" >
      <div className="row">
        <div className="col-12 p-0">
        <h1 className="p-0">Adicionar novo curso</h1>
        </div>
        <div className="col-12 p-0 home-form">
        <CreateCourseForm/>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
