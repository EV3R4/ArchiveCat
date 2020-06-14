# ArchiveCat
## ArchiveCat will clone and pull starred git repositories.
![GitHub](https://img.shields.io/github/license/EV3R4/ArchiveCat)
![GitHub repo size](https://img.shields.io/github/repo-size/EV3R4/ArchiveCat)
![Zero dependencies](https://img.shields.io/badge/dependencies-0-success)

## Installation
* Install [Node.js](https://nodejs.org/)
* Install [Git](https://git-scm.com/)
* Clone the repository with `git clone https://github.com/EV3R4/ArchiveCat.git` or download the [zip](https://github.com/EV3R4/ArchiveCat/archive/master.zip)

## Setup
### Config
You can copy this template into "config.json" and replace the values.
```json
{
    "github": {
        "username": "<insert your username here>"
    }
}
```
Additionally you can add the following lines after "github" if you want to ignore projects
```json
"ignore": [
    "<insert projects to ignore here>"
]
```

## Executing ArchiveCat
Run `node index` in a cmd of your choice

## Notes
If you are using Windows, you might need to use Git Bash

## Rodmap
The projects roadmap is [here](https://github.com/EV3R4/ArchiveCat/projects/1)
