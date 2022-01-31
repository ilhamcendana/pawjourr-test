import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box fixed w-full">
        <div className="flex-none hidden lg:flex">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 hidden px-2 mx-2 lg:flex">
          <span className="text-lg font-bold">
            Pawjourr Test
          </span>
        </div>
        <div className="flex-1 lg:flex-none">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-ghost" />
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img src="https://www.fillmurray.com/640/360" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen" style={{ backgroundImage: "url(https://picsum.photos/640/360)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello Navaneeth
            </h1>
            <p className="mb-5">
              Here's my setup for NextJS X Tailwind X DaisyUI <br/>
              I'm sorry for the lateness, I hope you still considering me as the candidate 😁
            </p>
            <label for="my-modal-2" className="btn btn-primary">My thoughts about Daisy UI</label>
            {/* <label for="" class="btn btn-primary modal-button">open modal</label>  */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <p>I think we can build more faster than ever UI with DaisyUI, this is so amazing!!</p>
                <div className="modal-action">
                  <label for="my-modal-2" className="btn btn-primary">Accept</label>
                  <label for="my-modal-2" className="btn">Close</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
