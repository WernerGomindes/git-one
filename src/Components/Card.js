import React from 'react';

const Card = props => {
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='Image1' className='card-img-top'/>
            </div>
            <div className='card-body text dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>{props.para}</p>
                <a 
                    href={props.link} 
                    className="btn btn-outline-success"
                >Click Here
                </a>
            </div>  
        </div>
    );
}

export default Card;
