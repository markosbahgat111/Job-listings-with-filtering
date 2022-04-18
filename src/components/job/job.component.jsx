import Category from '../category/category.component';
import './style.scss';

const JOB = ({ job, handleSearch }) => {
	return (
		<div
			className='main_container relative my-20 mx-auto  flex h-fit w-10/12 flex-col items-start justify-between  px-5 py-10 lg:my-10 lg:h-[150px] lg:flex-row lg:items-center lg:px-10 lg:py-0'
			id={job.featured ? 'featured' : undefined}>
			<div className='flex items-start lg:items-center'>
				<img src={job.logo} alt={job.position} className='absolute left-3 top-[-50px] mr-5 lg:static' />
				<div className='pt-10 lg:pt-0'>
					<div className='flex items-center gap-3'>
						<span className='mr-3 font-bold text-[#5ba4a4]'>{job.company}</span>
						{job.new && (
							<span className='rounded-full bg-[#5ba4a4] px-2 pt-1 text-center text-sm text-white'>
								NEW!
							</span>
						)}
						{job.featured && (
							<span className='rounded-full bg-[#2c3a3a] px-2 pt-1 text-center text-sm text-white'>
								FEATURED!
							</span>
						)}
					</div>
					<h1 className='cursor-pointer py-1 text-2xl font-bold text-[#2c3a3a] hover:text-[#5ba4a4]'>
						{job.position}
					</h1>
					<div className='flex items-center gap-2 text-[#7b8e8e]'>
						<span>{job.postedAt}</span>
						<span>.</span>
						<span>{job.contract}</span>
						<span>.</span>
						<span>{job.location}</span>
					</div>
				</div>
			</div>
			<hr className='my-5 h-0.5 w-full border-0 bg-gray-300 lg:hidden' />
			<div className='flex flex-wrap gap-3 lg:flex-nowrap'>
				<Category title={job.role} type='role' handleSearch={handleSearch} />
				<Category title={job.level} type='level' handleSearch={handleSearch} />
				{job.languages.map((lang, index) => (
					<Category title={lang} key={index} type='languages' handleSearch={handleSearch} />
				))}
				{job.tools.map((tool, index) => (
					<Category title={tool} key={index} type='tools' handleSearch={handleSearch} />
				))}
			</div>
		</div>
	);
};

export default JOB;
