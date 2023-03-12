import { react, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ name, picture, bio, children }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          style={{ border: "none", outline: "none", background: "transparent" }}
        >
          {children}
        </button>
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} class="dialog">
        <div class="dialog-container">
          <Dialog.Panel className="w-full max-w-sm rounded bg-neutral-900 opacity-100 text-primary px-5 py-4 text-sm">
            <div className="max-w-full aspect-square overflow-hidden">
              {children}
            </div>
            <Dialog.Title className="text-6xl uppercase font-humane mt-2">
              {name}
            </Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <p className="text-xs text-justify leading-5">{bio}</p>

            <button
              className="w-full bg-primary mt-4 uppercase text-custom-black py-2 text-xs"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
