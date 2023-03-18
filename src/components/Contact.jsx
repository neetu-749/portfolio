import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";

 import { 
	SiLinkedin,
	SiGmail,
	SiGithub,
	SiLeetcode
 } from "react-icons/si"


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_caw5gzd',
        'template_c8yemee',
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Neetu",
          from_email: form.email,
          user_id: '_uKYJb5O9wg9q9jlk',
          to_email: "chaudharyneetu749@gmail.com",
          message: form.message,
        },
        '_uKYJb5O9wg9q9jlk'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div style={{justifyContent:"center"}}
      className={`xl:mt-12 flex xl:flex-row xm:flex-row flex-row sm:flex-row  gap-10 overflow-hidden`}
    >
                <a target={"_blank"} style={{display:"inline"}} href="https://github.com/neetu-749">
									<SiGithub size={25} />
								</a>
							
							  <a target={"_blank"} style={{display:"inline"}} href="https://www.leetcode.com/bestie"  ><SiLeetcode size={25} />
                </a>
								
								<a target={"_blank"} style={{display:"inline"}} href="https://www.linkedin.com/in/neetu-kumari-169349206/">
									<SiLinkedin size={25} />
								</a>
						
								
								<a target={"_blank"} style={{display:"inline"}} href="mailto:chaudharyneetu749@gmail.com">
									<SiGmail size={25} />
								</a>
						
    </div>
  );
};

export default SectionWrapper(Contact, "contact");