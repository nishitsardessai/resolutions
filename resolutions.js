if (Meteor.isClient) {
  Template.body.helpers({
    resolutions:[
    { title: "hellodjsiknfsjin"},
    { title: "vsfijbikjds"},
    { title: "jcbsdjkcjsdnsjidk"}]
  });







}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
