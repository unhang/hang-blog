import { useParams } from "react-router";

const PostDetail = () => {
  const params = useParams();
  console.log(params['id']);

	return (
		<div className='w-full h-min-[100vh] px-[32px] md:max-w-[768px] md:mx-auto'>
			Coming soon...
		</div>
	);
};

export default PostDetail;
