import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MainApp = () => {
	return (
		<React.Fragment>
			<App />
			<footer>
				developed by: <a href="https://www.pedropcruz.pt">pedropcruz</a> and inspired by: <a href="https://dribbble.com/shots/1719542-This-is-Exciting">Zan Ilic</a>
			</footer>
		</React.Fragment>
	)
}

ReactDOM.render(MainApp(), document.getElementById('root'));
registerServiceWorker();
