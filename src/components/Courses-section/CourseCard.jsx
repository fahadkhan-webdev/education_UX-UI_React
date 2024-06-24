import React from 'react'
import './courses.css'

function CourseCard(props) {
    const {title, lesson, link} = props.item
  return (
    <div className='single_course_item'>
       <i class="ri-arrow-right-up-line"></i>

       <div className='course_details'>
        <h3 className='course_title mb-4'>
            {title}
        </h3>
        <h6 className='course_platform'>Rapt 'N Rel</h6>
        <div>
            <p className='lesson d-flex align-items-center gap-1 mb-0'>{lesson}</p>
            <p className='d-flex align-items-center gap-1'>
                <a href="learn.com" className='see_more'>learn</a>
            </p>
        </div>
       </div>
    </div>
  )
}

export default CourseCard