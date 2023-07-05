import Form from "../../components/Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../redux/post/post.api.calls";
import {useEffect} from "react";
import {unsetState} from "../../redux/post/post.slice";
import {useNavigate} from "react-router-dom";

export default function AddPost(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const post_data = {...Object.fromEntries(form_data.entries()), 'post_categories' : form_data.getAll('post_categories')};

    try {
      await dispatch(addPost(post_data)).unwrap()
      navigate(-1)
    } catch (err) {
    //   5555
    }
  }

  useEffect(() => {
    return () => dispatch(unsetState())
  }, [])
  return(
      <>
        <main className="overflow-x-auto w-full py-12 text-left">
          <div
              className="mx-auto w-max mt-16 px-6 pb-4 border border-gray-400/50 rounded-md shadow-lg shadow-gray-500/50">
            <div className="mt-5">
              <form onSubmit={handleSubmit} className="grid gap-y-6 py-5">
                <Form />
              </form>
            </div>
          </div>
        </main>
      </>
  )
}