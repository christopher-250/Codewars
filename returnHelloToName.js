/*const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;*/

function hello(name) {
  if(!name){
    return 'Hello, World!'
  }
  let officialName = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return `Hello, ${officialName}!`;
}