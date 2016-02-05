<p align="center">
  <a><img src="demo1.gif" title="Demo"/></a>
</p>

<br>

<p align="center">
  <a href="https://travis-ci.org/dawsonbotsford/puffer-fish"><img src="https://travis-ci.org/dawsonbotsford/puffer-fish.svg?branch=master" alt="build status" height="22"></a>
  <a href="https://badge.fury.io/js/puffer-fish"><img src="https://badge.fury.io/js/puffer-fish.svg" alt="npm version" height="22"></a>
  <br>
  <b>Trend your Github repo on whatever language you want by generating the filetype of your choosing.</b>
</p>

<br>
## Installation
`npm install -g puffer-fish`

<br>
## Usage
```shell
puffer-fish
```

<br>
## FAQ
<br>
#### How does this help with trending?
Getting Github trending comes first from the programming language your repo is classified as. Once the [Linguist](https://github.com/github/linguist) classifies your repo into it's most prominent language, you are competing against the other popular repo's <b>also classified in that language</b> for trending.

With this hack, you can puff your repo with fake language data in order to compete for an easier language.

<br>
#### Where did the generated file go?
The generated file is placed in `.puffer-fish` which is a hidden directory. To show hidden directories, you'll need `ls -a`, `ls` does not show hidden files or directories.

This design choice was made so that puffer-fished files would remain largely hidden and out of your way during the software development process.

<br>
#### Why is the generated filename so hideous?
We used random strings in order to generate the filename in order to avoid name collisions should you want multiple puffer-fished files. With the current file length of 10 characters, this creates a possibility of 62<sup>10</sup> unique filenames. 


<br>
## Tests
```shell
mocha
```

<br>
## Changelog
[Changelog.md](CHANGELOG.md)

<br>
## License
MIT
