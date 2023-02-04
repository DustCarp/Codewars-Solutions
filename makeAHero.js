//Function that creates a hero with the properties of a name, position, health, damage, and experience

function Hero (name) {
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}