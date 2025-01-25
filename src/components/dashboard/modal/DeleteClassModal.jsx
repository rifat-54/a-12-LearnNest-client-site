import React from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
const DeleteClassModal = ({isOpen, setIsOpen,handleRejectedClass}) => {
    return (
        <div className="w-full">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg  space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold mx-20 text-red-500 text-center">Are You Sure?</DialogTitle>
            <Description className='text-center'>This Class will  be Rejected </Description>
            <div className="divider"></div>

            <div className="flex justify-between gap-4">
              <button onClick={handleRejectedClass} className="text-white bg-red-400 btn">Yes</button>
              <button className="text-white bg-green-400 btn" onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
    );
};

export default DeleteClassModal;