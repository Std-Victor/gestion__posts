import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deletePost, fetchPostsData} from "../../redux/post/post.api.calls";
import {useNavigate} from "react-router-dom";
import Alert from "../../components/Alert/Alert";

export default function Posts() {
  const { posts, message, errors } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPostsData());
  }, []);
  return (
    <>
      <div className="overflow-x-auto w-full py-12">
        <div className="mx-auto w-4/5 flex justify-between items-center px-5 pb-4">
          <div className="text-left">
            <h1 className="text-lg font-semibold my-2">
              Welcome to our community
            </h1>
            <p className="text-gray-500 text-base">
              This is a list of all the posts that are available now, feel free
              to read anyone you would like.
            </p>
          </div>
          <button
            type="button"
            className="font-medium text-white bg-gradient-to-r rounded-md from-cyan-500 to-blue-700 px-4 py-3 shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br"
            onClick={()=> navigate("/posts/add")}
          >
            Add New Post
          </button>
        </div>
        <Alert />
        <table className="mx-auto w-4/5 text-sm text-left text-gray-500 rounded-md overflow-hidden">
          <thead className="text-sm font-medium text-white bg-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 w-44">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {
            posts && posts.map(item => (
                <tr className="bg-white border-b" key={item.id}>
                  <td
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.id}
                  </td>
                  <td className="px-6 py-2"> {item.title} </td>
                  <td className="px-6 py-2 flex items-center gap-1 w-40 ">
                    <button type="button" className="px-2 py-1 hover:text-blue-600 hover:drop-shadow-lg "
                            onClick={() => navigate(`/posts/${item.id}`)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
                      </svg>
                    </button>
                    <button type="button" className="px-2 py-1 hover:text-green-600 hover:drop-shadow-lg "
                            onClick={()=> navigate(`/posts/${item.id}/edit`)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                      </svg>
                    </button>
                    <button type="submit" className="px-2 py-1 hover:text-red-600 hover:drop-shadow-lg " onClick={() => {
                      dispatch(deletePost(item.id))
                      dispatch(fetchPostsData())
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                      </svg>
                    </button>
                  </td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </>
  );
}
