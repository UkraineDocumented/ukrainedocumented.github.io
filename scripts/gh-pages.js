var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 
'https://github.com/UkraineDocumented/ukrainedocumented.github.io',
		user: {
			name: 'Elena', // update to use your name
			email: 'elenalingshao@gmail.com' // Update to use your 
email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
