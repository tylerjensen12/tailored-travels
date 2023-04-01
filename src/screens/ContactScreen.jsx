import React from "react";

const ContactScreen = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold ml-20 p-10">Contact Me!</h1>
      <form className="flex flex-col bg-green-100 w-2/5 m-auto p-5 rounded-lg drop-shadow-md gap-3">
        <div>
          <input type="text" placeholder="First" className="mr-3"/>
          <input type="text" placeholder="Last" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" />
        </div>
        <button className="bg-green-200 text-lg font-medium p-2 rounded-lg hover:drop-shadow-md w-24 m-auto">Submit</button>
      </form>
    </div>
  );
};

export default ContactScreen;
