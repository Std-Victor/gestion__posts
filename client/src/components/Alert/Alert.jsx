import {useSelector} from "react-redux";

export default function Alert(){
  const {message, errors } = useSelector(state => state.post)
  return(
      <>
        {(message || errors) && (
            <div
                className={`mx-auto w-4/5 flex p-4 my-4 font-semibold text-sm border ${message ? "text-green-800  border-green-300" : "text-red-800  border-red-300"} rounded-lg bg-green-50`}
                role="alert"
            >
              <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Alert!</span> {message || errors}
              </div>
            </div>
        )}</>
  )
}