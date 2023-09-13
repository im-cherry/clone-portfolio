"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 150,
  deleteSpeed: 100,
})
  .pause(1000)
  .delete(5)
  .pause(500)
  .type("성장하는")
  .pause(1000)
  .delete(4)
  .pause(500)
  .type("프론트엔드")
  .pause(1000)
  .delete(5)
  .go();
