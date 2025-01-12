"use client";

import { ReactNode } from "react";
import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"
  
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText = "Schedule Meeting",
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white",
          className
        )}
        aria-labelledby="meeting-modal-title"
      >
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="Modal Image" width={72} height={72} />
            </div>
          )}
          <h1
            id="meeting-modal-title"
            className="text-3xl font-bold leading-[42px]"
          >
            {title}
          </h1>
          {children}
          <Button
            className={cn(
              "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 flex items-center justify-center gap-2",
              buttonClassName
            )}
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="Button Icon"
                width={13}
                height={13}
              />
            )}
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
