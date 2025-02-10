class cat{
    name: string;
    sex : string ;
    age : number;
    weight : number ;
    color : string;
    texture : string ;


constructor(name: string, sex: string, age: number, weight: number, color: string, texture: string) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.weight = weight;
    this.color = color;
    this.texture = texture;
}

    }

    //instancia
    const gato1 = new cat("Oscar", "Macho", 3, 7, "marron", "rayada \n");
    const gato = new cat("Luna", "Hembra", 2, 5, "gris", "Lisa ");

    
    console.log(`Name: ${gato1.name}`);
    console.log(`Sex: ${gato1.sex}`);
    console.log(`Age: ${gato1.age}`);
    console.log(`Weight: ${gato1.weight}`);
    console.log(`Color: ${gato1.color}`);
    console.log(`Texture: ${gato1.texture}`);

    console.log(`Name: ${gato.name}`);
    console.log(`Sex: ${gato.sex}`);
    console.log(`Age: ${gato.age}`);
    console.log(`Weight: ${gato.weight}`);
    console.log(`Color: ${gato.color}`);
    console.log(`Texture: ${gato.texture}`);