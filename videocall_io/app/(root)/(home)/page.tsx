import MeetingTypeList from "@/components/MeetingTypeList";
import CurrentTime from "@/components/CurrentTime";

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
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
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
