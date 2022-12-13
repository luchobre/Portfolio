import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ytix0p",
        "template_cf6mdvh",
        e.target,
        "0Pmw42bKBeJC5YUbM"
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Your email has been sent!",
        });
        console.log(res);
      })
      .catch((res) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }
  return (
    <div className="contact">
      <h1 className="logo">
        CONTACT <span>ME</span>
      </h1>
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form onSubmit={enviarEmail}>
            <p>
              <label>Full Name</label>
              <input type="text" name="fullname" required={true} />
            </p>
            <p>
              <label>Email Adress</label>
              <input type="email" name="email" required={true} />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="tel" name="phone" required={true} />
            </p>
            <p>
              <label>Adress</label>
              <input type="text" name="adress" />
            </p>
            <p className="block">
              <label>Message</label>
              <textarea name="message" rows="3" required={true}></textarea>
            </p>
            <p className="block">
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>More Info</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> San Carlos de Bariloche
            </li>
            <li>
              <i className="fas fa-phone"></i> (+549) 11 5891 4320
            </li>
            <li>
              <i className="fas fa-envelope-open-text"></i>{" "}
              lucho.bregoli@gmail.com
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            provident ipsam necessitatibus repellendus?
          </p>
          <p>Company.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
