import SecureSvg from "../images/svg/SecureSvg"

function Services() {
  return (
    <section className="w-full">
      <h2 className="text-center text-2xl pb-3 pt-2 avenir">Service</h2>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold mb-1">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
        <article className="bg-nuage shadow w-[30%] md:w-[15%] h-[200px] md:h-[300px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <SecureSvg />
          <div className="text-center">
            <h3 className="avenir-bold">Title</h3>
            <p className="avenir">Description</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
