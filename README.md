# UFCFGS-W4-Trial-Run

This is an AIML trial run for the UFCFGS course. This AIML bot uses exactly 5 categories to map out every response as required by the coursework specification.

## FAQ

###### My code contains sets and maps and won't run using the Java applet. What should I do?
You can convert the AIML files to a format that the Java applet can understand by running the `convertPandorabots.js` script. This will automatically make the directories necessary and copy the file over from the `files` directory to the main directory.

> Don't worry, you can still make commits from pandorabots into this repository, as it makes no changes to the AIML files.

## How to use

> If you want to run the converter script, you must have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).

To check that this AIML bot works as intended, you must first convert the files given from pandorabots into a format that the Java file `CW_Marker.jar` can understand. This can be done by running the `convertPandorabots.js` script via Node.js in the terminal. 

#### Windows
```cmd
node convertPandorabots.js
RUN.bat
```

#### MacOS/Linux
```bash
node convertPandorabots.js
./RUN.sh
```

> Make sure you've given the necessary permissions to the script files before running them. You can do this by running `chmod +x RUN.sh` in the terminal.

