var friends = [{
  id: 0
  name: 'Ean', 
  age: 24,
  yearMet: 2014
},{
  id: 1
  name: 'Jen', 
  age: 26,
  yearMet: 2002
}];


module.exports = function () {
  return {
    getFriends: function(){
      return friends;
    },
    removeFriend: function(id){
      friends.forEach(function(friend){
        if(friend.id === id){
          friends.splice(indexOf(friend.id), 1);
        }
      });
    }
  }
}

