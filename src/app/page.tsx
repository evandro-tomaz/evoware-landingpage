import { cn } from "@/lib/utils";
import { ModeToggle } from "./_components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset="1" stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <ModeToggle />
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl">
            The Next Dev
            <br />
            Full-Stack{" "}
            <span className="text-primary dark:text-primary">Next.js 14</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            impedit facere incidunt iure expedita labore ratione voluptates hic
            explicabo unde aliquid ut, eum dignissimos pariatur, nesciunt
            suscipit aliquam accusantium repellat.
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold dark:text-black"
            >
              Quero fazer parte
            </a>
            <a
              href="#feature"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Saiba mais
            </a>
          </div>
        </div>
        <h1 className="text-primary">The Next Dev Full-Stack Next.js 14</h1>
      </section>

      <section id="about">
        <h1>Sobre</h1>
      </section>

      <section id="feature">
        <h1>Tech Stack</h1>
      </section>

      <section id="contact">
        <h1>Contato</h1>
      </section>

      <section id="faq">
        <h2>Perguntas Frequentes</h2>
      </section>
    </main>
  );
}
