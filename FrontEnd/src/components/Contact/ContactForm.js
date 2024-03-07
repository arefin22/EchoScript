import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Title from "../shared/ReusableComponents/Title";

const ContactForm = () => {
  const [message, setMessage] = useState([]);
  const SERVICE_ID = "service_fuzqzze";
  const TEMPLATE_ID = "template_adp89vx";
  const USER_ID = "AXnM7tOCjDj4blXIC";
  const form = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    if (SERVICE_ID && TEMPLATE_ID && USER_ID && form?.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form?.current, USER_ID).then(
        (result) => {
          setMessage(result);
          toast("✔️ Thanks, We will contact you soon");
          form.current.reset();
          // console.log(form.current)
        },
        (error) => {
          toast("❌ something wrong, lets try again later");
        }
      );
    }
  };

  return (
    <div className="">
      <div className="md:w-2/5 mt-3 mx-auto">
        <Title title="Contact" />
      </div>
      <form ref={form} onSubmit={sendEmail} className="">
        <div className="md:w-2/5 mt-3 mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-black"
            id="user_name"
            name="user_name"
            required
          />
        </div>
        <div className="md:w-2/5 mt-3 mx-auto">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-black"
            name="email"
            required
          />
        </div>
        <div className="md:w-2/5 mt-3 mx-auto">
          <textarea
            rows={8}
            id="message"
            placeholder="Message"
            name="message"
            required
            className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-black"
          />
        </div>
        <div className="md:w-2/5 mt-3 mx-auto">
          <button
            type="submit"
            className="w-full rounded-3xl py-3 border-2 border-black text-black md:text-lg transition-all duration-300 hover:bg-black hover:text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
