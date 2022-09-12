import React from "react"

const Footer = () => {
  return (
    <section className="lg:py-36 py-24 bg-black/80 shadow-sm text-white font-mono fixed-bottom-0 absolute-bottom-0 z-100 text-center">
      <div className="lg:text-xl">
        <h1>Be part of the community.</h1>
        <h1 className="mb-8 lg:mb-16">
          / Our products are all over the world. <br className="lg:hidden" />
          Our heart is in Montreal. /
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div>
          <h1>Subscribe to our newsletter:</h1>
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-[400px] bg-[#333333] text-white rounded border border-white outline-none p-2"
          />
          <button type="submit" className="hidden" />
        </div>

        <div>
          <h1 className="hover:font-bold cursor-pointer">
            Follow-us on Instagram
          </h1>
          <h1 className="hover:font-bold cursor-pointer">
            Follow-us on Twitter
          </h1>
        </div>

        <div>
          <h1>Based in Montreal</h1>
          <h1>Since 2022</h1>
        </div>
      </div>
    </section>
  )
}

export default Footer
