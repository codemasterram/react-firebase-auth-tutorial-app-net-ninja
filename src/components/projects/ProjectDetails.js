import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-o">
                <div className="card-content">
                    <span className='card-title'>Project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius illum ipsa deserunt! Eius ex ab voluptatibus suscipit atque repellendus magnam, itaque provident nostrum eligendi non eveniet hic. Voluptatum, qui.    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Ram Sapkota</div>
                    <div>23 April, 11:30 Pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
