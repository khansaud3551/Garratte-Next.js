import Image from "next/image";
import AwarenessBanner from "./components/AwarenessBanner";
import Consideration from "./components/Consideration";
import Decision from "./components/Decision";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <AwarenessBanner />

      <div className="border_divider w-[300px] md:w-[520px] h-[1px]"></div>

      <Consideration />

      <div className="border_divider w-[300px] md:w-[520px] h-[1px]"></div>

      <Decision />

      <div className="border_divider w-[300px] md:w-[520px] h-[1px]"></div>

      <div className="bg-black w-full lg:w-[730px] mx-auto my-14 md:my-28">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg mb-3">
            Get answers to common questions about this course.
          </p>
        </div>
        <FAQ title="Is this course suitable for beginners?">
          <p>
            Yes, our course is suitable for all levels. We have lessons ranging
            from beginner to advanced, so no matter what your current level of
            proficiency is, you'll be able to find lessons that are tailored to
            your needs.
          </p>
        </FAQ>
        <FAQ title="How long does the course take to complete ?">
          <p>Content for section 2</p>
        </FAQ>
        <FAQ title="Will I have access to the course materials after I complete the course ?">
          <p>Content for section 3</p>
        </FAQ>
        <FAQ title="Can I ask questions and get support from the instructors ?">
          <p>Content for section 2</p>
        </FAQ>
      </div>
    </main>
  );
}
