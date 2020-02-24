module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  members = members.filter(function (item) {
    return typeof item === 'string'
  });

  members = members.map(function (item) {
    return item.trim().toUpperCase().substr(0, 1);
  }).sort().join('');
  return members;
};