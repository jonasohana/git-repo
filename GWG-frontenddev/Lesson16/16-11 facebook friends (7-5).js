/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
    name: "Pablo",
    friends: 4,
    messages: ["hey - how is GDW","how do you solve 99.7","PM me"],
    postMessage: function post(message) {
        var postedMessages = facebookProfile.messages.push(message); 
    },
    deleteMessage: function remove(index) {
        var deletedMessages = facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        facebookProfile.friends++;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    }

};





facebookProfile.postMessage("hey - keep");
facebookProfile.postMessage("lol - remove");
facebookProfile.postMessage("ho - keep");
facebookProfile.deleteMessage( 4 ) ;
console.log(facebookProfile.messages);

facebookProfile.addFriend() // 5
facebookProfile.removeFriend() // 6
facebookProfile.addFriend() // 7
console.log(facebookProfile.friends);




