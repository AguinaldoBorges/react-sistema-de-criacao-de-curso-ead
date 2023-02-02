import React, { useState} from "react";
import './style.css';

function CreateCourseForm() {
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

  const [page, setPage] = useState(1);


  const handleChange = e => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    await localStorage.setItem("course", JSON.stringify(course));
    await clearCourse()
    await redirect()
  };

  const clearCourse = ()=>{
setCourse({
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
  }

  const redirect = ()=>{
    window.location.href = '/curso';
  }


  return (
    <div className="p-5 pt-0 pb-0">
      <div className="steps container">
        <div className="row">
        </div>
        <div className="row justify-content-center">
          <ul className="col-4 justify-content-center">
            <li><div className={`m-2 step-1${page}`}><strong>1</strong></div></li>
            <li><div className={`m-2 step-2${page}`}><strong>2</strong></div></li>
            <li><div className={`m-2 step-3${page}`}><strong>3</strong></div></li>
            <li><div className={`m-2 step-4${page}`}><strong>4</strong></div></li>
          </ul>
        </div>
      </div>
      <form>
        {/* pagina 1 */}
        {
          page === 1 && (
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="name">Nome do curso</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={course.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary">Descrição resumida</label>
                <textarea
                  className="form-control"
                  id="summary"
                  name="summary"
                  value={course.summary}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição detalhada</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                />
              </div>
              {
                (course.name !== '' && course.category !== '' && course.summary !== '' && course.description !== '') && (
                  <div className="form-group">
                    <button className="btn btn-primary m-2" onClick={() => { setPage(2) }}>Próximo</button>
                  </div>
                )
              }

            </div>)
        }

        {/* pagina 2 */}
        {
          page === 2 &&
          (<div className="form-container">
            <div className="form-group">
              <label htmlFor="objectives">Objetivos do curso</label>
              <textarea
                className="form-control"
                id="objectives"
                name="objectives"
                value={course.objectives}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="targetAudience">Público-alvo</label>
              <input
                type="text"
                className="form-control"
                id="targetAudience"
                name="targetAudience"
                value={course.targetAudience}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Conteúdo programático</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={course.content}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duração do curso</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                name="duration"
                value={course.duration}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary m-2" onClick={() => { setPage(1) }}>Voltar</button>
              {
                (course.objectives !== '' && course.targetAudience !== '' && course.content !== '' && course.duration !== '') && (
                  <button className="btn btn-primary m-2" onClick={() => { setPage(3) }}>Próximo</button>
                )
              }
            </div>
          </div>
          )
        }

        {/* pagina 3 */}
        {
          page === 3 &&
          (<div className="form-container">
            <div className="form-group">
              <label htmlFor="numberOfLessons">Número de aulas ou módulos</label>
              <input
                type="text"
                className="form-control"
                id="numberOfLessons"
                name="numberOfLessons"
                value={course.numberOfLessons}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="format">Formato das aulas (vídeos, áudios, textos, etc.)</label>
              <input
                type="text"
                className="form-control"
                id="format"
                name="format"
                value={course.format}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="technicalRequirements">Requisitos técnicos para acesso ao curso</label>
              <textarea
                className="form-control"
                id="technicalRequirements"
                name="technicalRequirements"
                value={course.technicalRequirements}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificateInformation">Informações sobre certificado</label>
              <textarea
                className="form-control"
                id="certificateInformation"
                name="certificateInformation"
                value={course.certificateInformation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary m-2" onClick={() => { setPage(2) }}>Voltar</button>
              {
                (course.numberOfLessons !== '' && course.format !== '' && course.technicalRequirements !== '' && course.certificateInformation !== '') && (

                  <button className="btn btn-primary m-2" onClick={() => { setPage(4) }}>Próximo</button>

                )
              }
            </div>
          </div>)
        }

        {/* pagina 4 */}
        {
          page === 4 &&
          (<div className="form-container">
            <div className="form-group">
              <label htmlFor="price">Preço do curso</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={course.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="institutionInformation">Informações sobre a instituição responsável pelo curso</label>
              <textarea
                className="form-control"
                id="institutionInformation"
                name="institutionInformation"
                value={course.institutionInformation}
                onChange={handleChange}
              />
            </div>
            <div
              className="form-group">
              <label htmlFor="instructorInformation">Dados do instrutor ou professores</label>
              <textarea
                className="form-control"
                id="instructorInformation"
                name="instructorInformation"
                value={course.instructorInformation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentSupport">Suporte ao aluno (fórum, e-mail, chat, etc.)</label>
              <input
                type="text"
                className="form-control"
                id="studentSupport"
                name="studentSupport"
                value={course.studentSupport}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
                  <button className="btn btn-primary m-2" onClick={() => { setPage(3) }}>Voltar</button>
            {
              (course.price !== '' && course.institutionInformation !== '' && course.instructorInformation !== '' && course.studentSupport !== '') && (

                  <button type="button" className="btn btn-success m-2" onClick={() => { handleSubmit() }}>Salvar</button>
              )
            }
            </div>


          </div>)
        }
      </form>
    </div>
  );
};

export default CreateCourseForm;
