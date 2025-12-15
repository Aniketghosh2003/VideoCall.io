"use client";

import { useGetCalls } from "@/hooks/useGetCalls";

const UpcomingMeetingBanner = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  if (isLoading) {
    return (
      <h2 className="glassmorphism max-w-[340px] rounded py-2 text-center text-base font-normal">
        Loading upcoming meeting...
      </h2>
    );
  }

  if (!upcomingCalls || upcomingCalls.length === 0) {
    return (
      <h2 className="glassmorphism max-w-[340px] rounded py-2 text-center text-base font-normal">
        No upcoming meeting
      </h2>
    );
  }

  const sortedUpcoming = [...upcomingCalls].sort((a, b) => {
    const aTime = a.state.startsAt ? new Date(a.state.startsAt).getTime() : Infinity;
    const bTime = b.state.startsAt ? new Date(b.state.startsAt).getTime() : Infinity;
    return aTime - bTime;
  });

  const nextCall = sortedUpcoming[0];
  const startsAt = nextCall.state.startsAt
    ? new Date(nextCall.state.startsAt)
    : null;

  if (!startsAt) {
    return (
      <h2 className="glassmorphism max-w-[340px] rounded py-2 text-center text-base font-normal">
        No upcoming meeting
      </h2>
    );
  }

  const now = new Date();
  const isToday =
    startsAt.getFullYear() === now.getFullYear() &&
    startsAt.getMonth() === now.getMonth() &&
    startsAt.getDate() === now.getDate();

  const timeString = startsAt.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateString = isToday
    ? "Today"
    : startsAt.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      });

  return (
    <h2 className="glassmorphism max-w-[340px] rounded py-2 text-center text-base font-normal">
      {`Upcoming Meeting: ${dateString} at ${timeString}`}
    </h2>
  );
};

export default UpcomingMeetingBanner;
