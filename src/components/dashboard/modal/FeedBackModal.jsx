import React from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ReactStars from "react-rating-stars-component";
const FeedBackModal = ({
  open,
  setOpen,
  handleFeedback,
  setFeedbackLink,
  ratingChanged,
}) => {
  return (
    <div className="w-full">
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg  space-y-4 border rounded-md bg-white p-12">
            <DialogTitle className="font-bold mx-20 text-2xl text-center">
              Feedback Assignment
            </DialogTitle>
            <div className="text-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write Your Feedback</span>
                </label>
                <textarea
                  onChange={(e) => setFeedbackLink(e.target.value)}
                  className="textarea textarea-bordered"
                  placeholder="feedback..."
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
            
              <ReactStars
                value={3}
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#ffd700"
              />
               
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleFeedback}
                className="text-white bg-[#6DC5D1] btn"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default FeedBackModal;
