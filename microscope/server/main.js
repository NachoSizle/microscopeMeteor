import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  /*
  Tracker.autorun(function(){
      console.log('There are ' + Posts.find().count() + ' posts.');
    });
    */
  // code to run on server at startup
  if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
});

//ASI COMPARTIMOS TODOS LOS POSTS. MISMA FUNCION QUE AUTOPUBLISH
Meteor.publish('posts', function() {
  return Posts.find();
});

/*
//ASI SOLO COMPARTIMOS LOS POSTS QUE NO ESTEN MARCADOS
Meteor.publish('posts', function() {
  return Posts.find({flagged: false});
});
*/
/*
//DE ESTA FORMA COMPARTIMOS LOS POSTS QUE NO ESTAN MARCADOS Y CON ALGUN PARAMETRO
Meteor.publish('posts', function(title) {
  return Posts.find({flagged: false, title: title});
});
*/