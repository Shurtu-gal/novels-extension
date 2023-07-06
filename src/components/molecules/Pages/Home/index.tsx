import { useEffect, useState } from 'react';

const HomePage = () => {
	//Get Current tab from chrome api
	const [currentTab, setCurrentTab] = useState<chrome.tabs.Tab>();
	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			console.log(tabs);
			setCurrentTab(tabs[0]);
		});
	}, []);
	return <div>{currentTab?.url}</div>;
};

export default HomePage;
