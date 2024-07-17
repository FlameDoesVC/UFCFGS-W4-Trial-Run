const fs = require("fs");

const aimlFiles = fs.readdirSync("./files");

if (aimlFiles.length === 0) {
	console.log("No AIML files found in the aiml directory");
	return;
}

if (aimlFiles.length > 2) {
	console.log("More than 1 AIML file found in the aiml directory, please make sure to only have 1 AIML file in the aiml directory");
	return;
}

const aimlFilename = aimlFiles[0].split(".")[0];

if (fs.existsSync(aimlFilename) && fs.lstatSync(aimlFilename).isFile()) {
	console.log(`File "${aimlFilename}" already exists and conflicts with directory, please remove it before running this script`);
	return;
}

if (!fs.existsSync(aimlFilename)) {
	fs.mkdirSync(aimlFilename);
}

fs.copyFileSync(`./files/${aimlFiles[0]}`, `./${aimlFiles[0]}`);

["maps", "sets"].forEach((dir) => {
	if (!fs.existsSync(`${aimlFilename}/${dir}`)) {
		fs.mkdirSync(`${aimlFilename}/${dir}`);
	}
});

const sets = fs.readdirSync("./sets");
const maps = fs.readdirSync("./maps");

sets.forEach((set) => {
	const content = fs.readFileSync(`./sets/${set}`, "utf8");

	try {
		const json = JSON.parse(`{"sets": ${content}}`);

		const sets = json.sets.flat();
		const CWFormat = sets.join("\n");

		fs.writeFileSync(`${aimlFilename}/sets/${set.split(".")[0]}.txt`, CWFormat, "utf8");
		// console.log(sets);
		console.log(`Set ${set} converted`);
	} catch (e) {	
		console.log(`Error parsing set ${set}, please make sure the files are exactly as is in pandorabots`);
		return;
	}
});

maps.forEach((map) => {
	const content = fs.readFileSync(`./maps/${map}`, "utf8");

	try {
		const json = JSON.parse(`{"maps": ${content}}`);

		const maps = json.maps;
		const CWFormat = maps.map(([key, value]) => `${key}: ${value}`).join("\n");

		fs.writeFileSync(`${aimlFilename}/maps/${map.split(".")[0]}.txt`, CWFormat, "utf8");
		console.log(`Map ${map} converted`);
	} catch (e) {
		console.log(`Error parsing map ${map}, please make sure the files are exactly as is in pandorabots`);
		return;
	}
});

console.log("Sets and Maps converted");
console.log("If no other errors occured you can run the .jar file the teacher gave us")