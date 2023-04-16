import Image from "next/image";
import AwarenessBanner from "./components/AwarenessBanner";
import Consideration from "./components/Consideration";
import Decision from "./components/Decision";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <AwarenessBanner />
      <Consideration />
      <Decision />
      <div className="bg-black w-full lg:w-[730px] mx-auto my-14 md:my-28">
        <FAQ title="Is this course suitable for beginners?">
          <p>
            Yes, our course is suitable for all levels. We have lessons ranging
            from beginner to advanced, so no matter what your current level of
            proficiency is, you'll be able to find lessons that are tailored to
            your needs.
          </p>
        </FAQ>
        <FAQ title="How long does the course take to complete?">
          <p>Content for section 2</p>
        </FAQ>
        <FAQ title="Section 3">
          <p>Content for section 3</p>
        </FAQ>
        <FAQ title="How long does the course take to complete?">
          <p>Content for section 2</p>
        </FAQ>
      </div>
      <img
        src="
      assets/footer.gif"
        className="w-[650px] mx-auto"
        alt=""
      />
      <p className="text-center text-xl mb-5">Copyright @ 2023</p>
    </main>
  );
}
