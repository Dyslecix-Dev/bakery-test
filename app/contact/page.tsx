"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

export default function ContactPage() {
  const [selected, setSelected] = useState<string>("individual");

  return (
    <section className="min-h-[calc(100vh-64px)] p-4 pt-20 flex items-center justify-center bg-primary-pink">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />

        <Images selected={selected} />
      </div>
    </section>
  );
}

// TODO: Handle form submission with SendGrid
const Form = ({ selected, setSelected }: { selected: string; setSelected: (selected: string) => void }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-tertiary-brown transition-colors duration-[750ms] ${selected === "company" ? "bg-primary-pink-accent" : "bg-secondary-teal"}`}
    >
      <h3 className="text-4xl font-bold mb-6">Contact us</h3>

      <div className="mb-6">
        <p className="text-2xl mb-2">Hello! My name is...</p>
        <input type="text" placeholder="Your name..." className="text-dark bg-light transition-colors duration-[750ms] placeholder-tertiary-brown p-2 rounded-md w-full focus:outline-0" />
      </div>

      <div className="mb-6">
        <p className="text-2xl mb-2">I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of...</p>
            <input type="text" placeholder="Your company name..." className="text-dark bg-light transition-colors duration-[750ms] placeholder-tertiary-brown p-2 rounded-md w-full focus:outline-0" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-6">
        <p className="text-2xl mb-2">I&apos;d love to ask about...</p>
        <textarea
          placeholder="Whip up your message here :)"
          className="min-h-[150px] text-dark bg-light transition-colors duration-[750ms] placeholder-tertiary-brown p-2 rounded-md w-full focus:outline-0 resize-none"
        />
      </div>

      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className="bg-tertiary-brown text-light transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold cursor-pointer"
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({ selected, setSelected }: { selected: string; setSelected: (selected: string) => void }) => {
  return (
    <div className="border-[1px] rounded border-light overflow-hidden font-medium w-fit">
      <button
        className={`${selected === "individual" ? "text-tertiary-brown cursor-not-allowed" : "text-light  cursor-pointer"} text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && <motion.div transition={BASE_TRANSITION} layoutId="form-tab" className="absolute inset-0 bg-light z-0" />}
      </button>

      <button
        className={`${selected === "company" ? "text-tertiary-brown cursor-not-allowed" : "text-light  cursor-pointer"} text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && <motion.div transition={BASE_TRANSITION} layoutId="form-tab" className="absolute inset-0 bg-light z-0" />}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: string }) => {
  return (
    <div className="bg-light relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1607977293913-f4b36d704e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1670899460364-ebc917bac09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

const BASE_TRANSITION = { ease: "anticipate" as const, duration: 0.75 };
