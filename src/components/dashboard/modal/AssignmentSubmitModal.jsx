import React from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const AssignmentSubmitModal = ({ isOpen, setIsOpen,handleSubmitAssignment,setLink }) => {
    return (
        <div className="w-full">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg  space-y-4 border rounded-md bg-white p-12">
            <DialogTitle className="font-bold mx-20 text-2xl text-center">Submit Assignment</DialogTitle>
            <Description className='text-center'>

            <div className="form-control">
          <label className="label">
            <span className="label-text">Assignmet Link</span>
          </label>
          <textarea onChange={(e)=>setLink(e.target.value)} className="textarea textarea-bordered" placeholder="Assignmet Link:"></textarea>
        </div>
            </Description>
            

            <div className="flex justify-center gap-4">
              <button onClick={handleSubmitAssignment} className="text-white bg-[#6DC5D1] btn">Submit</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
    );
};

export default AssignmentSubmitModal;