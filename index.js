var cat = /** @class */ (function () {
    function cat(name, sex, age, weight, color, texture) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.texture = texture;
    }
    return cat;
}());
//instancia
var gato1 = new cat("Oscar", "Macho", 3, 7, "marron", "rayada \n");
var gato = new cat("Luna", "Hembra", 2, 5, "gris", "Lisa ");
console.log("Name: ".concat(gato1.name));
console.log("Sex: ".concat(gato1.sex));
console.log("Age: ".concat(gato1.age));
console.log("Weight: ".concat(gato1.weight));
console.log("Color: ".concat(gato1.color));
console.log("Texture: ".concat(gato1.texture));
console.log("Name: ".concat(gato.name));
console.log("Sex: ".concat(gato.sex));
console.log("Age: ".concat(gato.age));
console.log("Weight: ".concat(gato.weight));
console.log("Color: ".concat(gato.color));
console.log("Texture: ".concat(gato.texture));
