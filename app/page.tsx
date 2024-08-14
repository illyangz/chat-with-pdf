import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  ServerCogIcon,
  MonitorSmartphoneIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important documents secured and easily accessible for chatting and interpretation.",
    icon: GlobeIcon,
  },
  {
    name: "Intuitive and Fast Responses",
    description: "Ready to experience lighting fast answers to your questions?",
    icon: ZapIcon,
  },
  {
    name: "Chat Memory",
    description:
      "Designed to remember and interpret all of your uploaded documents.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Chats",
    description: "Engage with your PDFs like never before",
    icon: EyeIcon,
  },
  {
    name: "Cloud Storage and Backup",
    description: "Rest assured your documents are safe on the cloud!",
    icon: ServerCogIcon,
  },
  {
    name: "Interpret Across Devices",
    description: "Immerse yourself in the chat with our responsive features. ",
    icon: MonitorSmartphoneIcon,
  },
];
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-lg">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center ">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Your Document and PDF Interpreter
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight ">
              Interactive PDF Chats
            </p>
            <p>
              Introducing{" "}
              <span className="font-bold tracking-tight bg-gradient-to-bl from-black to-indigo-600 bg-clip-text text-transparent">
                Chat with PDF.
              </span>
              <br />
              <br />
              Simply upload your document, and our chatbot will answer questions
              and summarize content. Ideal for everyone.{" "}
              <span className="font-bold tracking-tight bg-gradient-to-bl from-black to-indigo-600 bg-clip-text text-transparent">
                Chat with PDF{" "}
              </span>
              turns static documents into informative conversations, boosting
              productivity by 10x.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href={"/dashboard"}>Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-x-7xl px-6 lg:px-8">
            <Image
              src={"/VciRSTI.jpeg"}
              alt={"App Screenshot"}
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-600/30"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
            </div>
          </div>
        </div>

        <div className="">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div className="relative pl-9">
                <dt className="inline font-semibold text-blue-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-400"
                  />
                </dt>

                <dd className="">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
