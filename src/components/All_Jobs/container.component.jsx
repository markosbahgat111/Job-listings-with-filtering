import JOB from '../job/job.component';

const Container = ({ jobs, handleSearch }) => {
	return (
		<div className='mt-[180px] min-h-[100vh] bg-cyan-50 py-32 bg-cover'>
			{jobs.map((job) => (
				<JOB key={job.id} job={job} handleSearch={handleSearch} />
			))}
		</div>
	);
};

export default Container;
