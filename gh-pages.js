var ghpages = require("gh-pages");

ghpages.publish(
	"public", // path to public directory
	{
		branch: "gh-pages",
		repo: "https://github.com/UkraineDocumented/ukrainedocumented.github.io", // Update to point to your repository
		user: {
			name: "Elena", // update to use your name
			email: "elenalingshao@gmail.com", // Update to use your email
		},
	},
	() => {
		console.log("Deploy Complete!");
	}
);
