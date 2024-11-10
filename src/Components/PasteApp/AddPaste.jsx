import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PasteNavbar from './PasteNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../../features/pasteApp/pasteSlice';
import toast from 'react-hot-toast';

const AddPaste = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [params, setParams] = useSearchParams();
    const titleRef = useRef(null);
    const pasteId = params.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    const createPaste = () => {

        if (title.trim()) {
            const paste = {
                title: title,
                content: value,
                _id: pasteId || Date.now().toString(36),
                createAt: new Date().toISOString()
            }

            if (pasteId) {
                dispatch(updateToPaste(paste));
            }
            else {
                dispatch(addToPaste(paste));
            }

            setTitle('');
            setValue('');
            setParams({});
        }
        else {
            toast.error("Title is Required");
            titleRef.current.focus();
        }
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id == pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])


    return (
        <div className="container">
            <PasteNavbar /><br />
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h1>
                    {pasteId ? "Update Paste" : "Add Paste"}
                    </h1>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6">
                    <input type="text" tabIndex={"1"} ref={titleRef} placeholder='Enter Paste Title' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="col-sm-6">
                    <button className='btn btn-primary' tabIndex={"3"} onClick={createPaste}>
                        {pasteId ? "Update Paste" : "Create Paste"}
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6">
                    <textarea name="value" tabIndex={"2"} className='form-control' value={value} placeholder='Enter Paste Content Here...' onChange={(e) => setValue(e.target.value)}></textarea>
                </div>

            </div>
        </div>
    )
}

export default AddPaste