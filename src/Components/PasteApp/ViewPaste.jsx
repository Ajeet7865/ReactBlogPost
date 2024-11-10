import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PasteNavbar from './PasteNavbar';

const ViewPaste = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();
  const paste = allPastes.find((p) => p._id == id);
  console.log(paste)
  return (
    <>
      <PasteNavbar />
      <br />
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                <Link to="/pastes">
                <i className='fa fa-arrow-left'></i> 
                   </Link>
                </div>
                <div className="col-sm-9">
                  
                  <h5 className="card-title h1">{paste.title}</h5>
                  <p className="card-text">{paste.content}</p>
                  <p style={{marginLeft:"10px",marginTop:"10px"}}><i className="fa fa-solid fa-calendar"></i> {new Date(paste.createAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPaste