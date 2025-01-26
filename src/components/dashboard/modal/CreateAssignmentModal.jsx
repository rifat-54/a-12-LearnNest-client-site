import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateAssignmentModal = ({ isOpen, setIsOpen, handlesubmit,startDate, setStartDate }) => {
    
  return (
    <div className="w-full">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed left-[7%] inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-3xl mx-auto   space-y-4 border bg-white p-12">
            <div className="card bg-base-100 w-full max-w-2xl mx-auto  shrink-0 shadow-2xl">
              <form onSubmit={handlesubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                  name="title"
                    type="text"
                    placeholder="title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <DatePicker className="input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea required name="description" className="textarea textarea-bordered" placeholder="Write description"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Assignment</button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateAssignmentModal;
