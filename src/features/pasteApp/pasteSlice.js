import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
    name: 'paste',
    initialState: {
        pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
    },
    reducers: {
        addToPaste: (state, action) => {
            const paste = action.payload;

            if (state.pastes.some(obj => obj.title == paste.title)) {
                toast.error("Already Exists");
            }
            else {
                state.pastes.push(paste);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Added Successfully");
            }
        },
        updateToPaste: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) => item._id === paste._id);

            if (index >= 0) {
                state.pastes[index] = paste;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));

                toast.success("Update Successfully");
            }

        },
        resetAllPaaste: (state, action) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
        },
        removePaste: (state, action) => {
            const pasteId = action.payload;
            const index = state.pastes.findIndex((item) => item._id === pasteId);

            if (index >= 0) {
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));

                toast.success("Delete Successfully");
            }

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaaste, removePaste } = pasteSlice.actions

export default pasteSlice.reducer