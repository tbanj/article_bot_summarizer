import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
// import React from 'react'

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("it is clicked");
  };

  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center
            items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            required
            placeholder="Enter a URL"
            value={article.url}
            id="url"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700
          "
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse URL History */}
      </div>

      {/* Display Results */}
    </section>
  );
};

export default Demo;
