import React, { Component } from "react";
import "./MainContent.scss";
import "./Dashboard.scss";
import { connect } from "react-redux";
//import Modal from "./Modal/Modal";

class Dashboard extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-content__account-wrapper">
          <div class="company__wrapper-text">
          <h1 class="company__title">О Компании</h1>
              <p>
                &nbsp;Научно-производственное объединение CARDDEX
                специализируется на разработке, проектировании и серийном
                производстве программно-аппаратных продуктов и решений для
                систем контроля.
              </p>
              <p>
                &nbsp;Наша компания начала свою деятельность в 2005 году,
                объединив в рабочую группу профессионалов в области электроники,
                механики, программного обеспечения и системного построения.
                Сегодня, по прошествии недолгого времени, мы с гордостью можем
                отнести себя к одной из немногочисленных российских компаний,
                имеющих полный цикл выпуска собственной продукции высокой
                сложности.
              </p>
            <p>
              На&nbsp;сегодняшний день <strong>CARDDEX располагает:</strong>
              <ul class="company__wrapper-text-list">
                <li>
                  &mdash; мощным и&nbsp;высокотехнологичным производственным
                  комплексом, расположенным на&nbsp;нашем современном
                  <br />
                  заводе в&nbsp;г. Орел;
                </li>
                <li>
                  &mdash; группой программной разработки сложных&nbsp;IT систем;
                </li>
                <li>
                  &mdash; собственным конструкторским бюро и
                  опытно-экспериментальным производством; Наша территория
                  <br />
                  охвата рынка постоянно и активно расширяется и уже вышла за
                  пределы России и стран СНГ. При этом
                  <br /> CARDDEX:
                </li>
                <li>
                  &mdash; достаточно молодая компания со свежими взглядами,
                  новыми идеями и увлеченной, творческой группой
                  <br />
                  единомышленников;
                </li>
              </ul>
            </p>
            <p>
              <strong>Стратегия CARDDEX:</strong>
              <ul class="company__wrapper-text-list">
                <li>
                  &mdash; это отраслевое лидерство по издержкам, направленное на
                  создание конкурентных преимуществ в своих
                  <br />
                  сегментах рынка. Внутренняя философия построения;
                </li>
                <li>
                  &mdash; это пробуждение личного интереса к общему делу каждого
                  сотрудника, задействованного в процессах
                  <br />
                  разработки и производства продукции, а также в управлении и
                  развитии современной технологичной
                  <br />
                  компании.
                </li>
              </ul>
            </p>
            <p>
              Однако, на наш взгляд, ни одна компания не в состоянии достичь
              каких-либо серьезных результатов без
              <br />
              эффективного взаимодействия с клиентами и партнерами.
            </p>
            <p>
              Поэтому мы постарались создать самые привлекательные условия
              сотрудничества для наших существующих и<br />
              потенциальных партнеров. В отношениях с нашими клиентами мы всегда
              открыты как для диалога, так и для
              <br />
              критики. Мы четко осознаем, что успех наших партнеров — это и есть
              наш успех.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  projects: state.projects
});
export default connect(
  mapStateToProps,
  {}
)(Dashboard);

//class Dashboard extends Component {
//  state = {
//    modal: false,
//    edit: false,
//    name: "",
//    members: [],
//    id: "",
//    owner: {}
//  };
//  toggleModal = e => {
//    this.setState({ modal: !this.state.modal, edit: false });
//  };
//  toggleEditModal = (name, members, id, owner, e) => {
//    e.stopPropagation();
//    this.setState({
//      modal: !this.state.modal,
//      edit: !this.state.edit,
//      name: name,
//      members: members,
//      id: id,
//      owner: owner
//    });
//  };
//render() {
//    const { projects } = this.props.projects;
//    let content;
//    let projectData = projects.sort().map(project => (
//      <div
//        key={project._id}
//        className="project-icon"
//        onClick={() => this.props.history.push(`/projects/${project._id}`)}
//      >
//        <div className="project-name">{project.name}</div>
//        <div
//          className="project-info-button"
//          onClick={this.toggleEditModal.bind(
//            this,
//            project.name,
//            project.teamMembers,
//            project._id,
//            project.owner
//          )}
//        >
//          Edit Task
//        </div>
//        <div className="project-info-button">Go to Task</div>
//      </div>
//    ));

//    if (projects.length > 0) {
// At least one project
//      content = (
//        <>
//          <button className="main-btn" onClick={this.toggleModal}>
//            Создать задачу
//          </button>
//          <div className="modal-wrapper">
//            <Modal
//              onClose={this.toggleModal}
//              modal={this.state.modal}
//             edit={this.state.edit}
//              name={this.state.name}
//              members={this.state.members}
//              id={this.state.id}
//              owner={this.state.owner}
//            />
//          </div>
//
//          <div className="projects-wrapper">{projectData}</div>
//        </>
//      );
//    } else {
// No projects
//      content = (
//        <>
//          <div className="projects">
//            <div className="no-projects">
//              <h1 className="header">Нет новых задач</h1>
//              <button className="main-btn" onClick={this.toggleModal}>
//                Создать задачу
//              </button>
//
//              <div className="modal-wrapper">
//                <Modal onClose={this.toggleModal} modal={this.state.modal} />
//              </div>

//            </div>
//          </div>
//        </>
//      );
//    }
//return (
//  <div className="main-content">
//    <h1 className="main-content__account-wrapper">Заголовок</h1>
//   {/*       {content}                       */}
//  </div>
//);
//}
//}
//const mapStateToProps = state => ({
//  projects: state.projects
//});
//export default connect(
//mapStateToProps,
//  {}
//)(Dashboard);
//export default Dashboard;
