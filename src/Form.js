import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {

    
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cknq5rk",
        "template_hacurmn",
        e.target,
        "user_Kf1ygWvjFgsEFN43DT4IN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <fieldset>
        <br />
        <label className="label" htmlFor="type">
          Event Type:
        </label>
        <input type="text" name="type" id="type" className="input" required />
      </fieldset>
      <fieldset>
        <br />
        <label className="label" htmlFor="duration">
          Duration:
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          className="input"
          required
        />
        <label className="label" htmlFor="guests">
          Number of guests:
        </label>
        <input
          type="text"
          name="guests"
          id="guests"
          className="input"
          required
        />
        <label className="label" htmlFor="fullname">
          Contact Fullname:
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="input"
          required
        />
        <label className="label" htmlFor="company">
          Company Name:
        </label>
        <input type="text" name="company" id="company" className="input" />
        <label className="label" htmlFor="phone">
          Phone Number:
        </label>
        <input type="text" name="phone" id="phone" className="input" required />
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input type="text" name="email" id="email" className="input" required />
      </fieldset>
      <fieldset>
        <label className="label" htmlFor="comments">
          Comments:
        </label>
        <textarea
          type="text"
          name="comments"
          id="comments"
          className="textarea"
        />
      </fieldset>
      <input type="submit" value="SUBMIT" />
    </form>
  );
}

// export default class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { feedback: "", name: "Name", email: "misha.coffee.hookah@gmail.com" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ feedback: event.target.value });
//   }

//   handleSubmit (event) {
// 	const templateId = 'template_id';

// 	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
//   }

//   sendFeedback (templateId, variables) {
// 	window.emailjs.send(
//   	'gmail', templateId,
//   	variables
//   	).then(res => {
//     	console.log('Email successfully sent!')
//   	})
//   	// Handle errors here however you like, or use a React error boundary
//   	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//   }
// //   handleSubmit(event) {
// //     const templateId = "template_0ivftca";

// //     this.sendFeedback(templateId, {
// //       message_html: this.state.feedback,
// //       from_name: this.state.name,
// //       reply_to: this.state.email,
// //     });
// //   }

// //   sendFeedback(templateId, variables) {
// //        window.emailjs
// //       .send("service_cknq5rk", templateId, variables)
// //       .then((res) => {
// //         console.log("Email successfully sent!");
// //       })
// //       // Handle errors here however you like, or use a React error boundary
// //       .catch((err) =>
// //         console.error(
// //           "Oh well, you failed. Here some thoughts on the error that occured:",
// //           err
// //         )
// //       );
// //   }

//   render() {
//     return (
//       <form className="test-mailing">
//         <h1>Let's see if it works</h1>
//         <div>
//           <textarea
//             id="test-mailing"
//             name="test-mailing"
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.feedback}
//             style={{ width: "100%", height: "150px" }}
//           />
//         </div>
//         <input
//           type="button"
//           value="Submit"
//           className="btn btn--submit"
//           onClick={this.handleSubmit}
//         />
//       </form>
//     );
//   }
// }
