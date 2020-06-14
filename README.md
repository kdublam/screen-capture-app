# Screen Capture App

Capture screenshots on the web using this tool. Add pages to the text files accordingly. Use GMBcapture.js and GMB.text if you want to capture screenshots of GMB. use dealership-capture.js and dealerships.txt to get screenshots of dealership sites.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them

Install Homebrew. Copy and paste this into your Mac Terminal: 
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
If Homebrew was installed previously, copy and paste this in terminal to update brew: 
```
brew update
```

Install NodeJS
```
brew install node
```

## Installing

1. Download or clone this repository to your local machine and go to the directory /screen-capture-app in your Terminal.
2. type `npm i` and hit enter. Wait for the dependencies to install

## Preparing the text files

If you are using the `dealership-capture.js`, you will need to put the links into the `dealerships.txt` file. Please make sure you insert a new line for each URL in the following format
```
https://www.porscheirvine.com/
https://www.porschenewportbeach.com/
```

If you are using the `GMBcapture.js`, you will add the searches to `GMB.txt`. Again, you will need to insert a new line for each searches in the following format
```
porsche+bellevue
porsche+irvine
porsche+newport+beach
porsche+plano
porsche+orlando
```
