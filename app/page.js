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
          <h1 className="mb-4 text-3xl font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="mb-3 text-lg">
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
          <p>
            The course duration depends on the individual learner's pace, but most students complete it within 6-8 weeks. This allows you to absorb the information and apply your newfound skills effectively.
          </p>
        </FAQ>
        <FAQ title="Will I have access to the course materials after I complete the course ?">
          <p>
            Absolutely! Once you complete the course, you'll continue to have lifetime access to all the course materials, enabling you to revisit the content and reinforce your learning whenever you need to.
          </p>
        </FAQ>
        <FAQ title="Can I ask questions and get support from the instructors ?">
          <p>
            Yes, you certainly can! Our instructors are dedicated to helping you succeed, so feel free to reach out to them with any questions or concerns you may have. They'll be more than happy to assist you and provide the support you need throughout your learning journey.
          </p>
        </FAQ>
      </div>

    </main>
  );
}
