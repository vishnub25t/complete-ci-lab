const express = require("express");

const app = express();

app.disable("x-powered-by");

app.get("/", (req, res) => {
		    res.json({
			    		            message: "CI Quality Pipeline Running Successfully"
			    		        });
});

app.get("/health", (req, res) => {
		    res.status(200).json({
			    		            status: "UP"
			    		        });
});

module.exports = app;

if (require.main === module) {
		    app.listen(3000, () => {
			    		            console.log("Server running on port 3000");
			    		        });
}
