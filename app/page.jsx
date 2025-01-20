import About from "./sections/About";
import DonationCards from "./sections/DonationCards";
import HomeLading from "./sections/HomeLanding";

export default function Home() {
  return (
    <main>
        <HomeLading />
        <DonationCards />
        <About />
    </main>
  );
}
