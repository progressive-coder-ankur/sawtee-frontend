/**
 * @return {Element} The SubscriptionCall component.
 */
export default function SubscriptionCall() {
  return (
    <>
      <div className="grid grid-rows-1">
        <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
          <div className="flex items-center justify-center">
            <div className="px-3 md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-5 leading-tight">
                Stay <span className="text-indigo-500">updated. </span>
              </h1>
              <h3 className="text-gray-600 mb-7 text-left leading-tight">
                Subscribe now and receive the latest updates.
              </h3>
            </div>
          </div>
          <div className="relative max-w-md text-center mx-auto lg:mx-0">
            <input
              className="sm:pr-36 pl-4 py-2 sm:py-3 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-indigo-500 hover:border-gray-500"
              type="text"
              placeholder="Your E-mail Address"
            />
            <button className="w-full sm:absolute right-0 top-0 bottom-0 bg-indigo-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-36 sm:leading-none focus:outline-none hover:bg-indigo-900 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
