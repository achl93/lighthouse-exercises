var socialNetwork = {
  data: {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
    f02: {
      name: "Bob",
      age: 20,
      follows: ["f05", "f06"]
    },
    f03: {
      name: "Charlie",
      age: 35,
      follows: ["f01", "f04", "f06"]
    },
    f04: {
      name: "Debbie",
      age: 40,
      follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
      name: "Elizabeth",
      age: 45,
      follows: ["f04"]
    },
    f06: {
      name: "Finn",
      age: 25,
      follows: ["f05"]
    }
  },
  // METHODS
  // inputs the name of person you want info on, returns an object with each person's name, 
  // who they follow and who follows them
  profileInfo: function (personId) {
    var info = {};
    if (personId in this.data) {
      info.name = this.data[personId].name;
      info.follows = this.getFollows(personId);
      info.followedBy = this.getFollowers(personId);
      // for (var i = 0; i < this.data[personId].follows.length; i++) {
      //   info.follows.push(this.idToName(this.data[personId].follows[i]));
      // }
    }
     console.log(info);
  },

  // inputs personId and returns the name corresponding to it
  idToName: function (personId) {
    var name = '';
    if (personId in this.data) {
      name = this.data[personId].name;
    }
    return name;
  },

  // inputs personId and returns the names of people who they follow
  getFollows: function (personId) {
    var follows = [];
    if (personId in this.data) {
      for (var i = 0; i < this.data[personId].follows.length; i++) {
        follows.push(this.idToName(this.data[personId].follows[i]));
      }
    }
    return follows;
  },

  // inputs personId and returns the names of people who follow them
  getFollowers: function (personId) {
    var followedBy = [];
    for (followersId in this.data) {
      // console.log("hi");
      for (var i = 0; i < this.data[followersId].follows.length; i++) {
        // console.log("hihi");
        if (this.data[followersId].follows[i] === personId) {
          // console.log("hihihi");
          followedBy.push(this.idToName(followersId));
        }
      } 
    }
    // console.log(followedBy);
    return followedBy;
  },

  mostFollows: function () {
    var topDog = '';
    var currMost = 0;
    for (Id in this.data) {
      if (this.data[Id].follows.length >= currMost) {
        topDog = this.data[Id].name;
        currMost = this.data[Id].follows.length;
      }
    }
    // console.log(topDog);
    return topDog;
  }
}

// socialNetwork.profileInfo("f06");
socialNetwork.mostFollows();
// socialNetwork.getFollowers("f06");