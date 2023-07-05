import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPostData} from "../../redux/post/post.api.calls";
import {useNavigate, useParams} from "react-router-dom";

export default function Post(){
  const {currentPost} = useSelector(state => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    dispatch(getPostData(id));
  },[])
  return(
      currentPost &&
      <>
        <div className="overflow-x-auto w-full py-12">
          <div className="mx-auto w-4/5 text-sm text-left text-gray-500 overflow-hidden rounded-md">
            <div className="w-xl ">
              <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide ">
                <div className="md:flex-shrink-0 relative">
                  <img
                      src={`https://picsum.photos/id/${currentPost.id <= 2 ? currentPost.id + 2 : currentPost.id - 2}${currentPost.categories[0].id}0/900/500.jpg`}
                      alt="mountains" className="w-full h-[340px] rounded-lg rounded-b-none" />
                  <h2 className="font-bold text-5xl text-white tracking-normal absolute bottom-6 px-20 ">{currentPost.title}</h2>
                </div>
                <div className="px-24 py-2 mt-2 ">
                  <div className="author flex items-center -ml-3 my-3 mb-10 ">
                    <div className="user-logo">
                      <img className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                           src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                           alt="avatar" />
                    </div>
                    <h2 className="text-sm tracking-tighter text-gray-900">
                      <a href="#">By {currentPost.user.name}</a> <span
                        className="text-gray-600 ml-1.5">{new Intl.DateTimeFormat("en-GB", {day:"numeric", month:"short", year: "numeric" }).format(new Date(currentPost.updated_at))}.</span>
                      {
                        currentPost.categories.map(item => (
                            <p className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 ml-3 capitalize" key={item.id}># {item.title}</p>
                        ))
                      }
                    </h2>
                  </div>
                  <p className="text-sm text-gray-700 px-2 mr-1">{currentPost.content}</p>
                  <div className="flex items-center justify-between mt-5 mx-6 py-5">
                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <button
                            className="flex items-center gap-3 font-medium text-gray-500 px-4 py-2 shadow-lg shadow-gray-500/50 hover:border-b-2 hover:text-gray-800 hover:font-medium hover:border-gray-500 rounded-md"
                            onClick={() => navigate(-1)}>
                          Back
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/>
                          </svg>
                        </button>
                        <button
                            className="flex items-center gap-3 font-medium text-gray-500 px-4 py-2 shadow-lg shadow-gray-500/50 hover:border-b-2 hover:text-green-600 hover:font-medium hover:border-green-500 rounded-md"
                            onClick={() => navigate(`/posts/${id}/edit`)}>
                          Modifier
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                          </svg>

                        </button>
                        <button
                            type="submit"
                            name="action"
                            value="delete"
                            className="flex items-center gap-3 font-medium text-gray-500 px-4 py-2 shadow-lg shadow-gray-500/50 hover:border-b-2 hover:text-red-600 hover:font-medium hover:border-red-500 rounded-md">
                          Supprimer
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a href="#" className="flex text-gray-700">
                      <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                      </svg>
                      5
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}