import MeetingTypeList from "@/components/MeetingTypeList";
import CurrentTime from "@/components/CurrentTime";
import UpcomingMeetingBanner from "@/components/UpcomingMeetingBanner";

const Home = () => {
  const backgroundImage = {
    hero: "url('/images/hero-background.png')",
  };

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div
        className="h-[303px] w-full rounded-[20px] bg-cover"
        style={{ backgroundImage: backgroundImage.hero }}
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <UpcomingMeetingBanner />
          <div className="flex flex-col gap-2">
            <CurrentTime />
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
