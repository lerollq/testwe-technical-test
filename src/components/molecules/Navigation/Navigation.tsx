import { Button, Space } from "@/components/atoms";
import { Pagination } from "@/types";

export interface NavigationProps extends Pagination {
	currentPage: string;
	onChange(page: string): void;
}

function Navigation({ first, last, next, prev, currentPage, onChange }: NavigationProps) {
	const isEnabled = (page?: string): page is string => {
		return !!page && page !== currentPage;
	};

	const getButtonProps = (page?: string): React.ButtonHTMLAttributes<HTMLButtonElement> => {
		if (isEnabled(page)) {
			return {
				onClick: () => onChange(page),
			};
		}

		return {
			disabled: true,
		};
	};

	const buttons = Object.entries({ first, prev, next, last }).map(([key, value]) => {
		return (
			<Button key={key} {...getButtonProps(value)}>
				{key}
			</Button>
		);
	});

	return <Space>{buttons}</Space>;
}

export default Navigation;
