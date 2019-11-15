const execa = require('execa');
const Listr = require('listr');

const tasks = new Listr([
  {
		title: 'Checking git status',
		task: async () => await execa('git', ['status']).then(result => {
			console.log(result)
		})
	},
  {
		title: 'Add everything to staging',
		task: async () => await execa('git', ['add'], ['.']).then(result => {
			console.log(result)
		})
	},
]);

tasks.run();
