import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//NOS SUBSCRIBIMOS A LOS POSTS QUE EMITA EL SERVER SIN PARAMETRO
//Meteor.subscribe('posts');
/*
//LO MISMO PERO CON PARAMETRO. En este caso, posts es el nombre del metodo de publicaciones que
//usa el servidor. Mientras que Meteor es el parametro de busqueda de dicho metodo.
Meteor.subscribe('posts', 'Meteor');
*/

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

