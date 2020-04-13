# ArchiveCat
![GitHub](https://img.shields.io/github/license/EV3R4/ArchiveCat)
![GitHub repo size](https://img.shields.io/github/repo-size/EV3R4/ArchiveCat)
![Node.js zero dependencies](https://img.shields.io/badge/dependencies-0-success)

ArchiveCat will clone and pull starred git repositories.

## Installation
* Install [Node.js](https://nodejs.org/)
* Clone the project

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
