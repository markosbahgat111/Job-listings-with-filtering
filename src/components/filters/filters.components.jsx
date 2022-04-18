import closeIcon from '../../assets/icon-remove.svg';
const Filters = ({ filters, handleSearch }) => {
	const All_filters = [...filters.map((item) => JSON.stringify(item))];
	const set = new Set(All_filters);
	return (
		<div className='absolute left-[50%] top-[150px] flex min-h-[80px] w-[95%] translate-x-[-50%] flex-row items-center justify-between rounded-lg bg-white px-4 py-2 lg:w-10/12 lg:px-10'>
			<div className='flex flex-row flex-wrap items-center'>
				{[...set].map((filter, index) => (
					<section
						key={index}
						className='mx-1 my-1 flex h-[40px] flex-row items-center gap-5 overflow-hidden rounded-lg bg-[#eef6f6] pl-3 lg:mx-3'>
						<span className='text-[#5ba4a4]'>{JSON.parse(filter).key}</span>
						<img
							src={closeIcon}
							alt={closeIcon}
							className='h-full w-full cursor-pointer bg-[#5ba4a4] p-3'
							onClick={() => handleSearch(JSON.parse(filter).key, JSON.parse(filter).type, true)}
						/>
					</section>
				))}
			</div>
			<h2 onClick={() => handleSearch(null, null)} className='cursor-pointer'>
				Clear
			</h2>
		</div>
	);
};

export default Filters;
