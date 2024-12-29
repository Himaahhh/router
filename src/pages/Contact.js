import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto mt-4 space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
      <div className="mt-4 text-center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509437!2d144.95605431531676!3d-37.817209979751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a0c89e0f2a0!2sMelbourne%20CBD%2C%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1603019038462!5m2!1sen!2sus"
          width="100%"
          height="200"
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
