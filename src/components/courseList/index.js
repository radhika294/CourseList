import React, { Component } from 'react'
import Course from '../Course';
import './courselist.scss';
import {courseData} from '../../Data'



export default class courseList extends Component {

    state = {
        courses: courseData
    };

    removeCourse = id => {
      
        const {courses} = this.state;
        const sortedCourses = courses.filter(course => course.id !== id);
        this.setState({
            courses: sortedCourses
        })

        
    };

    render() {

        const {courses}= this.state;

    //console.log(this.state.courses);

        return (
          <section className="courseList">
              {
                  courses.map( course => (
                  <Course key = {course.id}
                     course = {course} 
                     removeCourse ={this.removeCourse} />

                 ))
              }
            
          </section>
        );
    }
}
