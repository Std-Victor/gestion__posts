import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {fetchPostCategories} from "../../redux/post/post.api.calls";

export default function Form({post}){
  const {errors, categories} = useSelector(state => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostCategories());
  }, [])
  return(
      <>
      <input type="hidden" name="id" defaultValue={post?.id ?? 0 } />

      <div className="w-[580px]">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
        <input
            type="text"
            id="title"
            name="title"
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none
            ${errors?.title && "bg-red-50 border-red-500 text-red-900 placeholder-red-700"}`}
            placeholder="John Doe"
            defaultValue={post?.title ?? ''}
        />
        { errors?.title && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.title[0]}</p> }

      </div>
      <div className="w-[580px]">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Your post body</label>
        <textarea id="content" name="content" rows="10" defaultValue={post?.content ?? ""} className={`${errors?.content && "bg-red-50 border-red-500 text-red-900 placeholder-red-700"} block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`} placeholder="Write your thoughts here...">
    </textarea>
        { errors?.content && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors?.content[0]}</p> }
      </div>
      <div className="w-[580px]n flex gap-x-6">
        {categories && categories.map(item =>
            <div className="flex" key={item.id}>
              <input type="checkbox"
                     name="post_categories"
                     value={item.id}
                     defaultChecked={post?.categories.map(ctg => ctg.id).includes(item.id)}
                     className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                     id="hs-checkbox-group-1" />
              <label htmlFor="hs-checkbox-group-1" className="text-sm text-gray-500 ml-2 dark:text-gray-400">{item.title}</label>
            </div>
        )}
      </div>
        { errors?.post_categories && <p className=" text-sm text-red-600 dark:text-red-500">{errors?.post_categories[0]}</p> }
  <div className="w-[580px] flex gap-3 mt-3 justify-center">
    <button
        type="button"
        className="flex items-center gap-3 font-medium text-white bg-gradient-to-r rounded-md from-slate-400 to-gray-700 px-8 py-2 shadow-lg shadow-gray-500/50 hover:bg-gradient-to-br"
        onClick={() => navigate(-1)}
    >
      Cancel
    </button>
    <button
        type="submit"
        name="action"
        defaultValue="update"
        className="flex items-center gap-3 font-medium text-white bg-gradient-to-r rounded-md from-emerald-400 to-green-700 px-8 py-2 shadow-lg shadow-green-500/50 hover:bg-gradient-to-br"
    >
      Save
    </button>
  </div>
      </>
  )
}