// Each mixin is a traditional ES class
class Jumpable {
    jump() {
      console.log('jump...');
    }
  }
  
  class Duckable {
    duck() {
      console.log('duck...');
    }
  }
  
  // Including the base
  class Sprite {
    x = 0;
    y = 0;
  }
  
  // Then you create an interface which merges
  // the expected mixins with the same name as your base
  interface Sprite extends Jumpable, Duckable {}
  // Apply the mixins into the base class via
  // the JS at runtime
  applyMixins(Sprite, [Jumpable, Duckable]);
  
  let player = new Sprite();
  player.jump();
  player.duck();
  console.log(player.x, player.y);
  
  function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
        if (!baseCtorName) {
          return;
        }
        Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
      });
    });
  }