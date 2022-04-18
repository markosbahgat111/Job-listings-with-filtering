import Container from './components/All_Jobs/container.component';
import './App.scss';
import data from './data.json';
import { useState } from 'react';
import Filters from './components/filters/filters.components';

function App() {
	const [jobs, setJobs] = useState(data);
	const [filters, setFilters] = useState([]);
	const handleSearch = (key, type, remove) => {
		if (!remove) {
			setFilters((filters) => [...filters, { key, type }]);
			switch (type) {
				case 'role':
					setJobs((jobs) => [...jobs.filter((job) => job.role === key)]);
					break;
				case 'languages':
					setJobs((jobs) => [...jobs.filter((job) => job.languages.includes(key))]);
					break;
				case 'level':
					setJobs((jobs) => [...jobs.filter((job) => job.level === key)]);
					break;
				case 'tools':
					setJobs((jobs) => [...jobs.filter((job) => job.tools.includes(key))]);
					break;
				default:
					setJobs(data);
					setFilters([]);
					break;
			}
		} else {
			setFilters((filters) => [...filters.filter((item) => item.key !== key)]);
			setJobs(data);
			[...filters.filter((item) => JSON.stringify(item) !== JSON.stringify({ key, type }))].forEach((filter) => {
				switch (filter.type) {
					case 'role':
						setJobs((jobs) => [...jobs.filter((job) => job.role === filter.key)]);
						break;
					case 'languages':
						setJobs((jobs) => [...jobs.filter((job) => job.languages.includes(filter.key))]);
						break;
					case 'level':
						setJobs((jobs) => [...jobs.filter((job) => job.level === filter.key)]);
						break;
					case 'tools':
						setJobs((jobs) => [...jobs.filter((job) => job.tools.includes(filter.key))]);
						break;
					default:
						setJobs(data);
						setFilters([]);
						break;
				}
			});
		}
	};
	return (
		<div className='App'>
			{filters.length > 0 && <Filters handleSearch={handleSearch} filters={filters} />}
			<Container jobs={jobs} handleSearch={handleSearch} />
		</div>
	);
}

export default App;
