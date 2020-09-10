// import React from "react";
// // import axios from 'axios';
// import DatePickers from "../Datepicker/Datepickers.js";
// import { Link } from "react-router-dom";
// import useForm from "./useForm";


// const PrivateEvents = () => {
//   const [values, handleChange] = useForm({
//     type: "",
//     time: "",
//     duration: "",
//     guests: "",
//     fullname: "",
//     company: "",
//     phone: "",
//     email: "",
//     comments: "",
//   });


// //   handleSubmit(event){

// //     const messageHtml =  renderEmail(
// //       <MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
// //     );
    
// //             axios({
// //                 method: "POST", 
// //                 url:"http://localhost:3000/send", 
// //                 data: {
// //             name: this.state.name,
// //             email: this.state.email,
// //             messageHtml: messageHtml
// //                 }
// //             }).then((response)=>{
// //                 if (response.data.msg === 'success'){
// //                     alert("Email sent, awesome!"); 
// //                     this.resetForm()
// //                 }else if(response.data.msg === 'fail'){
// //                     alert("Oops, something went wrong. Try again")
// //                 }
// //             })
// //         }
// //   resetForm(){

// //     this.setState({feedback: ''});
// // }


//   return (
//     <>
//       <section>
//         <h3>EVENT INFORMATION</h3>
//         <label className="label" htmlFor="time">
//           Event Date & Time:
//         </label>
//         <DatePickers />
//         <form >
//           <fieldset>
//             <br />
//             <label className="label" htmlFor="type">
//               Event Type:
//             </label>
//             <input
              
//               type="text"
//               name="type"
//               id="type"
//               className="input"
              
//               required
//             />
//           </fieldset>
//           <fieldset>
//             <br />

//             <label className="label" htmlFor="duration">
//               Duration:
//             </label>
//             <input
              
//               type="text"
//               name="duration"
//               id="duration"
//               className="input"
             
//               required
//             />
//             <label className="label" htmlFor="guests">
//               Number of guests:
//             </label>
//             <input
              
//               type="text"
//               name="guests"
//               id="guests"
//               className="input"
            
//               required
//             />
//             <label className="label" htmlFor="fullname">
//               Contact Fullname:
//             </label>
//             <input
              
//               type="text"
//               name="fullname"
//               id="fullname"
//               className="input"
           
//               required
//             />
//             <label className="label" htmlFor="company">
//               Company Name:
//             </label>
//             <input
              
//               type="text"
//               name="company"
//               id="company"
//               className="input"
           
//               required
//             />
//             <label className="label" htmlFor="phone">
//               Phone Number:
//             </label>
//             <input
              
//               type="text"
//               name="phone"
//               id="phone"
//               className="input"
//               value={values.phone}
//               required
//             />
//             <label className="label" htmlFor="email">
//               Email:
//             </label>
//             <input
              
//               type="text"
//               name="email"
//               id="email"
//               className="input"
            
//               required
//             />
//           </fieldset>
//           <fieldset>
//             <label className="label" htmlFor="comments">
//               Comments:
//             </label>
//             <textarea
              
//               type="text"
//               name="comments"
//               id="comments"
//               className="textarea"
           
//             />
//           </fieldset>
//           <input type="submit" value="SUBMIT" />
//         </form>
//         <br />
//         <Link to="/e-dashboard">
//           <button id="cancel">Cancel</button>
//         </Link>
//       </section>
//       <br />
//     </>
//   );
// };

// export default PrivateEvents;
