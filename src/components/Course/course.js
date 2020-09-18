import React, { Component } from 'react'
import './course.scss';

export default class course extends Component {
state={
    showInfo:true
};

handleInfo = () => {
   this.setState({
       showInfo: !this.state.showInfo
   })
}
 


    render() {

        const{id,course,img,name,info} = this.props.course;
        const {removeCourse} = this.props;
        return (
          <article className="course">
            <div className="img-container">
              <img src={img} alt="image of course" />

              <span className="img-btn" onClick= {() => removeCourse(id)}>
                <i className="fas fa-window-close" />
              </span>
            </div>

            <div className="course-info">
              <h3>{course}</h3>
              <h4>{name}</h4>
              <h5>
                info{" "}
                <span onClick={this.handleInfo}>
                  <i className="fas fa-caret-square-down" />
                </span>
              </h5>
              {this.state.showInfo && <p>{info}</p>}
            </div>
          </article>
        );
          
    }
}
