const Category = ({ title, type, handleSearch }) => {
	return (
		<span
			className='cursor-pointer rounded-lg bg-[#eef6f6] px-3 py-1.5 text-center text-sm text-[#5ba4a4] hover:bg-[#5ba4a4] hover:text-[#eef6f6]'
			onClick={() => handleSearch(title, type)}>
			{title}
		</span>
	);
};

export default Category;
