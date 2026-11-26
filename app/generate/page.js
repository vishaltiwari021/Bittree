"use client"

import React, { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const GenerateForm = () => {
  
  const [links, setLinks] = useState([{ link: "", linkText: "" }]);
  const searchParams = useSearchParams();
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");


  const handleChange = (index, link, linkText) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) => (i === index ? { link, linkText } : item))
    );
  };

  const addLink = () => {
    setLinks([...links, { link: "", linkText: "" }]);
  };

  const submitLinks = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "links": links,
        "pic": pic,
        "handle": handle,
        "desc": desc
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const r = await fetch("http://localhost:3000/api/add", requestOptions);
      const result = await r.json();

      if (result.success) {
        toast.success(result.message || "Data inserted successfully");
        setLinks([{ link: "", linkText: "" }]);
        setHandle("");
        setPic("");
        setDesc("");
      } else {
        toast.error(result.message || "Error inserting data");
      }
    } catch (error) {
      toast.error("Something went wrong while submitting.");
    }
  };

  const isSubmitDisabled =
    !handle.trim() || !pic.trim() || !links[0]?.link.trim();

  return (
    <section className="bg-[#c8db1d] min-h-screen grid grid-cols-1 md:grid-cols-2 text-black">
      {/* Left Form Section - Added pt-32 to push content safely below the fixed navbar */}
      <div className="left flex flex-col items-center justify-start pt-32 pb-12 px-6 overflow-y-auto">
        <div className="w-full max-w-md flex flex-col gap-6">
          <div>
            <p className="text-4xl lg:text-5xl text-[#135203] font-mono font-bold">
              Welcome back
            </p>
          </div>

          {/* Step 1 */}
          <div className="item1 flex flex-col gap-2">
            <h3 className="text-slate-700 font-semibold">
              1: Claim Your Handle
            </h3>
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full px-4 py-2.5 focus:outline-2 focus:outline-[#1e6e0a] bg-white text-black rounded-2xl shadow-sm"
              type="text"
              placeholder="Choose Your Handle"
            />
          </div>

          {/* Step 2 */}
          <div className="item2 flex flex-col gap-3">
            <h3 className="text-slate-700 font-semibold">
              2: Enter the Links
            </h3>
            {links.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 pb-3 border-b border-[#135203]/20 last:border-none last:pb-0"
              >
                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linkText)
                  }
                  className="w-full px-4 py-2.5 focus:outline-2 focus:outline-[#1e6e0a] bg-white text-black rounded-2xl shadow-sm"
                  type="text"
                  placeholder="Enter Link (e.g. https://...)"
                />
                <input
                  value={item.linkText}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="w-full px-4 py-2.5 focus:outline-2 focus:outline-[#1e6e0a] bg-white text-black rounded-2xl shadow-sm"
                  type="text"
                  placeholder="Link Text (e.g. GitHub)"
                />
              </div>
            ))}
            <div>
              <button
                type="button"
                onClick={addLink}
                className="px-5 py-2 bg-[#135203] hover:bg-[#1a6b05] transition-colors text-[#c8db1d] font-medium cursor-pointer rounded-3xl shadow-sm"
              >
                + Add Link
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="item3 flex flex-col gap-3">
            <h3 className="text-slate-700 font-semibold">
              3: Enter the Profile Link and Description
            </h3>
            <input
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              className="w-full px-4 py-2.5 focus:outline-2 focus:outline-[#1e6e0a] bg-white text-black rounded-2xl shadow-sm"
              type="text"
              placeholder="Enter link to your Picture"
            />
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full px-4 py-2.5 focus:outline-2 focus:outline-[#1e6e0a] bg-white text-black rounded-2xl shadow-sm"
              type="text"
              placeholder="Enter a short description"
            />
            <button
              type="button"
              disabled={isSubmitDisabled}
              onClick={submitLinks}
              className="mt-2 w-full sm:w-fit px-6 py-2.5 bg-[#135203] hover:bg-[#1a6b05] disabled:bg-red-900 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer text-[#c8db1d] font-medium rounded-3xl shadow-sm"
            >
              Create your BitTree
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>

      {/* Right Image Section - Centered and padded from top to clear the navbar */}
     <div className="right hidden md:flex w-full h-screen items-center justify-end">
        <Image
          className="h-full w-auto object-contain object-right"
          src="/loginpage.png"
          alt="Login page"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

const Generate = () => (
  <Suspense fallback={null}>
    <GenerateForm />
  </Suspense>
);

export default Generate;