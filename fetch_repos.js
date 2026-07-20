const fs = require('fs');

async function fetchRepos() {
  try {
    const response = await fetch('https://api.github.com/users/gokulakannan69/repos?per_page=100');
    const data = await response.json();
    
    const formattedProjects = data.map((repo, index) => ({
      id: index + 1,
      title: repo.name.replace(/-/g, ' '),
      description: repo.description || 'A comprehensive project developed with modern web technologies.',
      tech: repo.language ? [repo.language] : ['JavaScript'],
      github: repo.html_url,
      link: repo.homepage || repo.html_url
    }));

    const content = `export const projectsData = ${JSON.stringify(formattedProjects, null, 2)};`;
    fs.writeFileSync('d:/Gokul/src/utils/constants.js', content);
    console.log(`Successfully wrote ${formattedProjects.length} projects to constants.js`);
  } catch (error) {
    console.error('Error fetching repos:', error);
  }
}

fetchRepos();
