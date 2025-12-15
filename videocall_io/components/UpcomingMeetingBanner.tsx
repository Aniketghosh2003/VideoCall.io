"use client";

import { useGetCalls } from "@/hooks/useGetCalls";

const UpcomingMeetingBanner = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  if (isLoading) {
    return (
      <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
        Loading upcoming meeting...
      </h2>
    );
  }

  if (!upcomingCalls || upcomingCalls.length === 0) {
    return (
      <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
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

  const timeString = startsAt
    ? startsAt.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
      {timeString ? `Upcoming Meeting at: ${timeString}` : "No upcoming meeting"}
    </h2>
  );
};

export default UpcomingMeetingBanner;
