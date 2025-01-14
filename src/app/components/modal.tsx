"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import "./style.css";
import Image from "next/image";

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Dialog({ title, onClose, onOk, children }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  const router = useRouter();

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    router.replace("/", undefined);
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    router.replace("/", undefined);
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog ref={dialogRef} className="modal-container">
        <div>
          <div className="modal-one">
            <h1>{title}</h1>
            <a onClick={closeDialog}>
              <Image src="/delete.svg" height={16} width={16} alt="close" />
            </a>
          </div>
          <div className="modal-main">
            {children}
            <div className="modal-button-container">
              <button onClick={clickOk} className="modal-butoon">
                Записаться
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
