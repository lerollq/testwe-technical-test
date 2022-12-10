import { Button } from "@/components/atoms";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();

	const goBack = () => {
		return navigate(-1);
	};

	return (
		<div>
			<Button onClick={goBack}>Go Back</Button>
			404
		</div>
	);
}

export default NotFound;
