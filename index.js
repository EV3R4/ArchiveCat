const { execSync } = require('child_process'),
      fs = require('fs'),
      https = require('https');

if (!fs.existsSync('projects')) fs.mkdirSync('projects');

let config;
if (fs.existsSync('config.json')) {
    config = require('./config.json');
} else {
    console.log('No config.json found!');
    return;
}

let lastUpdate = 0;
if (fs.existsSync('lastupdate.txt')) lastUpdate = parseInt(fs.readFileSync('lastupdate.txt'));

function update(url) {
    https.get(url, {headers: {'User-Agent': 'ArchiveCat'}}, (res) => {
        if (res.statusCode != 200) {
            console.log(`${res.statusCode}: ${res.statusMessage}`);
            return;
        }
        let body = '';
        res.on('data', (data) => body += data.toString());
        res.on('end', () => {
            JSON.parse(body).forEach(repo => {
                if (config.github.ignore.includes(repo.full_name)) {
                    console.log(`Ignoring ${repo.full_name}!`);
                    return;
                }
                const projectDirectory = `projects/${repo.full_name}`;
                const ownerDirectory = `projects/${repo.owner.login}`;
                if (fs.existsSync(projectDirectory)) {
                    if (Date.parse(repo.updated_at) < lastUpdate) {
                        console.log(`${repo.full_name} is already up to date!`);
                        return;
                    }
                    console.log(`Pulling ${repo.full_name}...`);
                    execSync(`git pull ${repo.clone_url} ${repo.default_branch}`, {cwd: projectDirectory});
                    console.log('Finished!');
                } else {
                    console.log(`Cloning ${repo.full_name}...`);
                    if (!fs.existsSync(ownerDirectory)) fs.mkdirSync(ownerDirectory);
                    fs.mkdirSync(projectDirectory);
                    execSync(`git clone ${repo.clone_url}`, {cwd: ownerDirectory});
                    console.log('Finished!');
                }
            });
            if (!res.headers.link || !res.headers.link.includes('next')) return;
            const link = res.headers.link.split(';')[0];
            update(link.substring(1, link.length - 1));
        });
        res.on('error', (error) => console.error(error));
    });
}
console.log('Updating...');
update(`https://api.github.com/users/${config.github.username}/starred?per_page=100`);
fs.writeFileSync('lastupdate.txt', Date.now());