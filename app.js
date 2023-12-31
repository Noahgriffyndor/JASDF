document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text File Data
function getText() {
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data) {
      const lines = data.split("\n");
      console.log(lines);
      document.getElementById('output').innerHTML = lines;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      // This is an array so we have to loop through it
      let output = '';

      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;

    })
    .catch(function(err){
      console.log(err);
    });
}

// Get external API data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      // This is an array so we have to loop through it
      let output = '';

      data.forEach(function(user){
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;

    })
    .catch(function(err){
      console.log(err);
    });
}
