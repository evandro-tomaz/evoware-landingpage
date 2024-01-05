import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/social-icons";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="bg-transparent">
      <div className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
          <div className="lg:pl-20 flex justify-center">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={"/hero-image.webp"}
                alt="Evandro Tomaz"
                width={800}
                height={800}
                quality={95}
                priority={true}
                className=" rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 text-center md:text-start">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
              Evoware Technology
            </h1>
            <p className="mt-6 text-base text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              aliquam, et distinctio maiores voluptas accusantium in facere
              eveniet. Molestias ut, delectus enim nesciunt obcaecati eius
              consequuntur ex expedita ipsam.
            </p>
            <div className="my-6 flex justify-center md:justify-start gap-6">
              <SocialLink href="https://instagram.com" icon={InstagramIcon} />
              <SocialLink
                href="www.linkedin.com/in/evandro-rodrigo-tomaz-da-silva-a138b3158"
                icon={LinkedinIcon}
              />
              <SocialLink
                href="https://github.com/evandro-tomaz"
                icon={GithubIcon}
              />
              <SocialLink
                href="https://youtube.com/evandro-tomaz"
                icon={YoutubeIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
