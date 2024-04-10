/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PageButton from "@/app/components/PageButton";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";

const features = [
  {
    title: "Transformative Group Coaching",
    desc: "Unlock your leadership potential through transformative group coaching sessions. Explore your personality's impact on your leadership style and decision-making; ensuring alignment with organisational values while pursuing your goals. In this supportive environment, you'll elevate your self-awareness, tackle challenges, and foster success.",
  },
  {
    title: "Engaging Workshops",
    desc: "Engage in workshops and masterclasses focused on Organisational Diversity, Governance, and ESG principles. From addressing unconscious bias to enhancing your professional profile, our workshops equip you for holistic professional growth and ethical leadership.",
  },
  {
    title: "Mentorship",
    desc: "6 virtual monthly mentorship sessions designed to align with your aspirations and leadership needs, fostering meaningful connections with mentors who are senior executives.",
  },
  {
    title: "Virtual Community",
    desc: "Central to EMERGE is its vibrant virtual community that transcends traditional networking, fostering deep connections and skill enhancement.",
  },
];

const steps = [
  "Apply through the application link",
  "Receive feedback within two weeks",
  "Successful applicants will be issued an Onboarding Pack",
  "Programme start - 5 June 2024",
];

const experts = [
  {
    name: "Rosalind Kainyah",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1690559964/RachelK_l1ecvs.jpg",
  },
  {
    name: "Rachel Nyaradzo Adams",
    imgUrl:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1712737349/RachelN_eyimu9.jpg",
  },
  {
    name: "Majorie Ngwenya",
    imgUrl:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1706882895/Marjorie_h1vxy7.jpg",
  },
  {
    name: "Lanre Fisher",
    imgUrl:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1712737565/Lanre_alfsbz.jpg",
  },
  {
    name: "Marcia Ashong-Sam",
    imgUrl:
      "https://res.cloudinary.com/tbra/image/upload/v1680706201/marcia_yzavpl.jpg",
  },
  {
    name: "Khurshed Moakes",
    imgUrl:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1712737564/khurshed_iogedz.jpg",
  },
  {
    name: "Akiniyi Ochieng",
    imgUrl:
      "https://res.cloudinary.com/dhhw72iwq/image/upload/v1712740151/akinyi_m7ubmf.webp",
  },
];
export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#000000] from-10% to-[#C89116]">
        <div className="">
          <div className="container relative flex justify-between gap-8 md:min-h-[800px] bg-[-100px] flex-col py-40 items-start z-10">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712148938/NextGen_oji5dr.png"
              className="absolute top-[-100px] h-[calc(100%+200px)] -left-40 -z-10"
              alt=""
            />
            <h1 className="text-6xl md:text-9xl text-white">
              Lead the <br />
              future
            </h1>
            <PageButton
              className="text-white border-white"
              variation="white"
              title="Apply Today"
              target="_blank"
              href="https://emergeapplication.paperform.co/"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#E6E6E6] relative z-10">
        <div className="container">
          <p className="text-center text-xl md:text-3xl max-w-6xl mx-auto py-24">
            Do you envision yourself at the forefront of economic
            transformation, breaking barriers and becoming the next generation
            of leadership in Africa? EMERGE is calling you.
          </p>
        </div>
      </section>
      <section className="py-24" id="overview">
        <div className="container grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
          <div className="">
            <h2 className="self-center font-serif text-4xl md:text-7xl">
              About <br />
              EMERGE
            </h2>
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712738645/EmergeRings_b0cren.png"
              className="mt-4 h-[80px]"
              alt=""
            />
          </div>
          <img
            className="self-center"
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712579683/NextGenAbout_reqtgf.jpg"
            alt=""
          />
        </div>
        <div className="container grid md:grid-cols-2 gap-x-16 gap-y-8 mt-8">
          <p>
            EMERGE, by TheBoardroom Africa, is a premier leadership development
            programme aiming to shape Africa&apos;s future by transforming the
            leadership pathways of ambitious 25-35-year-olds. Gain exclusive
            skills and insights to lead transformational change. And embrace
            resilience, growth, and excellence.
          </p>
          <div className="">
            <p>
              EMERGE elevates your leadership journey with a holistic approach
              to training, mentorship, and access to a vast network of
              executives. Through our comprehensive curriculum including the
              Growth Experience Programme, you will be empowered with tools to
              lead inclusive, innovative, and impactful organisations across
              Africa.
            </p>
            <p className="mt-8">
              Find out more.{" "}
              <a href="#" className="text-mustard underline">
                Register for the information session →
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#A6A6A6] to-white">
        <div className="container py-24 bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1712150060/Map_o8tpoe.png')] bg-no-repeat bg-right-top">
          <h1 className="text-4xl md:text-6xl text-darkblue mb-4">
            Key Features
          </h1>
          <p className="mb-16">
            Your journey begins with our flagship Growth Experience Programme, a
            comprehensive 6-month training comprising carefully crafted modules
            addressing the nuances of contemporary leadership. These include
            making the transition to leadership and management positions,
            understanding the crucial elements of value-based leadership,
            learning to embrace and handle conflict, as well as navigating the
            complexities of politics and power within organisations. The
            training prepares you to leverage your capacity to influence your
            organisation and career positively.
          </p>
          <div className="grid md:grid-cols-2 gap-16">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4 md:gap-8 items-start">
                <p className="text-4xl md:text-7xl font-serif leading-[0.6]">
                  0{i + 1}
                </p>
                <div className="">
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">
                    {feature.title}
                  </h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container grid md:grid-cols-2 md:gap-16 items-center">
          <div className="pt-24 md:pb-24 pb-8">
            <h2 className="text-4xl md:text-6xl text-darkblue mb-8">
              The Opportunity
            </h2>
            <p className="text-[#A6A6A6] italic mb-6 md:w-[90%]">
              A 6-month launchpad to transformative leadership. The programme
              starts 5 June.
            </p>
            <p className="md:max-w-[80%]">
              Register for EMERGE to be part of an inaugural cohort of 50
              leaders shaping Africa&apos;s future. This programme offers a
              unique blend of mentorship, expert-led masterclasses, and a
              platform that fosters community. Whether you&apos;re starting out
              or looking to elevate your leadership, EMERGE equips you with the
              skills, network, and insights to excel.
            </p>
          </div>
          <div className="pb-24 md:pb-0 md:h-full">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712579756/NextGenOpportunity_zo8bil.jpg"
              className="md:h-full md:object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#FAF8F5]">
        <div className="container">
          <h2 className="text-4xl md:text-6xl text-darkblue mb-16 text-center">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 mb-8 -md:gap-8 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center md:ml-5">
                <p className="font-bold px-16 py-4 rounded-full border-black border-2 inline-block mb-4">
                  Step {i + 1}
                </p>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="-md:hidden grid grid-cols-4 mb-8">
            {steps.map((e, i) => (
              <div key={i} className="flex items-center">
                <div className="w-5 h-5 bg-darkblue rounded-full"></div>
                <div className="w-full h-[1px] bg-darkblue"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r from-[#A6A6A6] to-white">
        <div className="container">
          <h2 className="text-4xl md:text-6xl text-darkblue mb-16 text-center">
            Programme Experts
          </h2>
          <div className="grid md:grid-cols-4 gap-16 justify-center">
            {experts.map((expert, i) => (
              <div key={i} className="">
                <img
                  className="rounded-xl h-80 w-full object-cover object-top lg:w-full"
                  src={expert.imgUrl}
                  alt=""
                />
                <p className="mt-4 font-bold text-center">{expert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-dawn">
        <div className="container -md:flex-col flex items-center justify-center gap-24">
          <h2 className="text-4xl md:text-6xl text-darkblue text-center">
            In partnership <br /> with
          </h2>
          <img
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1712579874/mastercard_o0bpqk.svg"
            width="200px"
            alt=""
          />
        </div>
      </section>
      <section className="py-24">
        <div className="container flex -md:flex-col md:items-center justify-between gap-12">
          <div className="">
            <h2 className=" text-5xl md:text-7xl text-darkblue mb-4 items-start">
              Be bold
            </h2>
            <p className="text-2xl">Make Your Mark. Apply Today.</p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <PageButton
              title="Apply Today"
              target="_blank"
              href="https://emergeapplication.paperform.co/"
            />
            <PageButton title="FAQs" href="/faqs" />
          </div>
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
}
