"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "@/hooks/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting = false,
  buttonIcon1,
  buttonText = "Join",
  handleClick,
  link,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] sm:w-[28em]  flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px] flex-wrap  sm:px-4 sm:py-6">
      {/* Card Header */}
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="Meeting Icon" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold sm:text-lg">{title}</h1>
            <p className="text-base font-normal sm:text-sm">{date}</p>
          </div>
        </div>
      </article>

      {/* Card Footer */}
      <article className="flex justify-center relative">
        {/* Attendee Avatars */}
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages &&
            avatarImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Attendee"
                width={40}
                height={40}
                className={cn("rounded-full", { absolute: index > 0 })}
                style={{ top: 0, left: index * 28 }}
              />
            ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>

        {/* Buttons */}
        {!isPreviousMeeting && (
          <div className="flex gap-2 sm:gap-1">
            <Button
              onClick={handleClick}
              className="rounded bg-blue-1 px-6 sm:px-4 sm:text-sm"
            >
              {buttonIcon1 && (
                <Image
                  src={buttonIcon1}
                  alt="Button Icon"
                  width={20}
                  height={20}
                />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
              className="bg-dark-4 px-6 sm:px-4 sm:text-sm"
            >
              <Image
                src="../../Public/icons/copy.svg"
                alt="Copy Link"
                width={20}
                height={20}
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
