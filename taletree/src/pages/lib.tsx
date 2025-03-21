
import React from 'react';

const Lib = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading Section */}
      <section>
        <h1 className="text-4xl font-bold">UI Library</h1>
        <p className="text-xl text-gray-700">
          This is a collection of all basic UI components used throughout the app.
        </p>
      </section>

      {/* Button */}
      <section>
        <h2 className="text-2xl font-semibold">Button</h2>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Primary Button
        </button>
        <button className="px-6 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
          Secondary Button
        </button>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-2xl font-semibold">Input</h2>
        <input
          type="text"
          placeholder="Enter text"
          className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Checkbox */}
      <section>
        <h2 className="text-2xl font-semibold">Checkbox</h2>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="checkbox1" />
          <label htmlFor="checkbox1" className="text-lg">
            Accept Terms and Conditions
          </label>
        </div>
      </section>

      {/* Radio Button */}
      <section>
        <h2 className="text-2xl font-semibold">Radio Button</h2>
        <div className="flex items-center">
          <input type="radio" id="radio1" name="group1" className="mr-2" />
          <label htmlFor="radio1" className="text-lg">Option 1</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="radio2" name="group1" className="mr-2" />
          <label htmlFor="radio2" className="text-lg">Option 2</label>
        </div>
      </section>

      {/* Headings */}
      <section>
        <h2 className="text-2xl font-semibold">Headings</h2>
        <h1 className="text-3xl font-bold">h1 - Main Heading</h1>
        <h2 className="text-2xl font-bold">h2 - Sub Heading</h2>
        <h3 className="text-xl font-bold">h3 - Smaller Heading</h3>
      </section>

      {/* Paragraph */}
      <section>
        <h2 className="text-2xl font-semibold">Paragraph</h2>
        <p className="text-lg text-gray-700">
          This is a paragraph of text. It can be styled with Tailwind classes to adjust the font size, color, and spacing.
        </p>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-semibold">Links</h2>
        <a href="#" className="text-blue-500 hover:underline">
          This is a link
        </a>
      </section>

      {/* Textarea */}
      <section>
        <h2 className="text-2xl font-semibold">Textarea</h2>
        <textarea
          className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Enter your message"
        />
      </section>
    </div>
  );
};

export default Lib;
