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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={{ position: "relative", zIndex: 50 }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: "rgba(0,0,0,0.7)",
            padding: "1rem 0",
          }}
        >
          <Dialog.Panel
            style={{
              width: "100%",
              maxWidth: "90%",
              borderRadius: ".5rem",
              background: "var(--black)",
              text: "var(--mint)",
              padding: ".9rem",
              fontSize: ".8rem",
              lineHeight: 1.4,
              textAlign: "justify",
            }}
          >
            <div
              style={{
                maxWidth: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                borderRadius: ".3rem",
              }}
            >
              {children}
            </div>
            <Dialog.Title
              style={{
                fontSize: "4rem",
                textTransform: "uppercase",
                fontFamily: "var(--humane)",
                marginTop: "1rem",
                lineHeight: 1,
              }}
            >
              {name}
            </Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <p>{bio}</p>

            <button
              style={{
                width: "100%",
                background: "var(--mint)",
                textTransform: "uppercase",
                color: "var(--black)",
                padding: ".6rem 0",
                fontSize: ".8rem",
                marginTop: "1.4rem",
                outline: "none",
                border: "none",
              }}
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
