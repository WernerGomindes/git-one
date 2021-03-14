import React from 'react'
import './Card.css';
import Card from './Components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/image1.JPG'
import img2 from './Images/image2.jpg'
import img3 from './Images/image3.jpg'
import img4 from './Images/image4.jpg'
import img5 from './Images/image5.jpg'
import img6 from './Images/image6.jpg'

function CardList() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div >
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={img1} title="Baby&Me1"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link="https://www.epw.in/engage/article/no-room-breastfeeding-mothers-india"
            />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img2} title="Baby&Me2"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link='https://www.facebook.com'
            />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img3} title="Baby&Me3"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link='#'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={img4} title="Baby&Me4"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link='#'
            />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img5} title="Baby&Me5"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link='#'
            />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img6} title="Baby&Me6"
              para="In my opinion there should be a room for breastfeeding mothers because a bathroom isn’t suitable for this purpose .
              It simply isn’t sanitary to express milk alongside toilets. There should be a lactation room at all the public places like malls or arcades and government buildings . 
              In India we still don’t have this facility at all such places where it is required and as a consequence of this women have to breastfeed their child in public toilets or maybe parking lots which is the most unhygienic place for this.
              The greatest deterrents are uncomfortable stares and lack of privacy at public places."
              link='#'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
