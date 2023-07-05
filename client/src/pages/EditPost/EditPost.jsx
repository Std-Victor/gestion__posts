import Form from "../../components/Form/Form";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostData, updatePost} from "../../redux/post/post.api.calls";
import Alert from "../../components/Alert/Alert";
import {unsetState} from "../../redux/post/post.slice";

export default function EditPost(){

  const { currentPost } = useSelector(state => state.post)
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const post_data = {...Object.fromEntries(form_data.entries()), 'post_categories' : form_data.getAll('post_categories')};

    try {
      await dispatch(updatePost(post_data)).unwrap()
      navigate(-1)
    } catch (err) {
      //   5555
    }
  }

  useEffect(() => {
    dispatch(getPostData(id))
    return () => dispatch(unsetState());
  }, [])
  return(
      <>
        <main className="overflow-x-auto w-full py-12 text-left">
          <Alert />
          <div
              className="mx-auto w-max mt-16 px-6 pb-4 border border-gray-400/50 rounded-md shadow-lg shadow-gray-500/50 relative">
            <div className="mt-5">
              <form onSubmit={handleSubmit}  className="grid gap-y-6 py-5">
                <Form post={currentPost} />
              </form>
            </div>
          </div>
        </main>
      </>
  )
}