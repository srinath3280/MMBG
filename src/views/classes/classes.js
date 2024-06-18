import React from 'react';
import './classes.css';
import { useLocation } from 'react-router-dom';

const Classes = () => {
    const classNames = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
    const ClassLinks = ["/class/class1","/class/class2","/class/class3","/class/class4","/class/class5","/class/class1","/class/class2","/class/class3","/class/class4","/class/class5",]
    return (
        <div className='classes'>
            <h1>Classes</h1>
            <div className='classlist'>
                {
                    classNames.map((item, index) => {
                        return (
                            <div className='classlist-items'>
                                <div className='classlist-items-class'>
                                    <h3>{item}</h3>
                                    <p>1 Subject(s)</p>
                                </div>
                                <a href={ClassLinks[index]} className='btn btn-primary'>Open <i class="bi bi-chevron-right"></i></a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Classes
