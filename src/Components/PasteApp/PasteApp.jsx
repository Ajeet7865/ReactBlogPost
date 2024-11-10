import React, { useState } from 'react';
import PasteNavbar from './PasteNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { removePaste } from '../../features/pasteApp/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Paste.css';

const PasteApp = () => {
    const pasteData = useSelector((state) => state.paste.pastes);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const filterData = pasteData.filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase()));

    const deletePaste = (pasteId) => {
        console.log('delete function called');
        dispatch(removePaste(pasteId));
    }

    return (
        <>
            <PasteNavbar />
            <br />
            <h1 className="text-center">All Pastes</h1>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            <input type="text" placeholder='search paste here...' className='form-control' value={search} onChange={e => setSearch(e.target.value)} />


            <br />
            <div className="row">
                {
                    filterData.length > 0 &&
                    filterData.map((item) => (
                        <div className="col-sm-12 mt-3" key={item._id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <h1 className="card-title">{item.title}</h1>
                                            <p className="card-text">{item.content}</p>
                                        </div>
                                        <div className="col-sm-4">

                                            <Link to={`/addpastes?pasteId=${item._id}`} className="btn custom-black-btn mx-2"> <i className='fa fa-edit' title="edit"></i> </Link>
                                            <Link to={`/pastes/${item._id}`} className="btn custom-black-btn mx-2">  <i className='fa fa-eye' title="view"></i> </Link>
                                            <button className="btn custom-black-btn mx-2" onClick={() => deletePaste(item._id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <button className="btn custom-black-btn mx-2" onClick={() => {
                                                navigator.clipboard.writeText(item.content);
                                                toast.success("Copied !!", { position: "top-right" });
                                            }}><i className="fa fa-solid fa-copy"></i></button>
                                            <br />
                                            <p style={{marginLeft:"10px",marginTop:"10px"}}><i className="fa fa-solid fa-calendar"></i> {new Date(item.createAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    filterData.length == 0 && (
                        <div className="col-sm-12 text-center">
                            <h4 className='text-muted'>Paste Not Found
                                <Link to="/addpastes" className='text-primary'>  New Paste</Link>
                            </h4>
                        </div>

                    )
                }
            </div>




        </>
    )
}

export default PasteApp