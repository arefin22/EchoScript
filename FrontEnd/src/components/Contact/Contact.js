import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-white text-center text-black py-60 space-y-20 rounded-bl-[100px] rounded-br-[100px] z-1">
      <p data-aos="fade-up">Contact</p>
      <h2 className="w-[50%] mx-auto md:text-5xl font-light" data-aos="fade-up">
        Would You Like To Have A Conversation With Us?
      </h2>
      <Link href={"/contact"}>
        <button
          className="bg-black rounded-full text-white px-10 py-3"
          data-aos="fade-up"
        >
          Get in Touch
        </button>
      </Link>
    </div>
  );
};

export default Contact;
