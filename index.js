class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atacar(){
    
    let attackType = ["magia", "espada", "artes marciais", "shuriken"]
    let attack = " "

    if (this.type === "mago"){
        attack = attackType[0]
        }
        else if (this.type === "guerreiro"){
            attack = attackType[1]
        }
        else if(this.type === "monge"){
            attack = attackType[2]
        }
        else if(this.type === "ninja"){
            attack = attackType[3]
        }
        else{
            attack = (`... espera... quem é ${this.name}?`)
            //hero type error
        }
    
        console.log(`o ${this.type} atacou usando ${attack}`)
    }
}

let heroMage = new hero("Gul'dan", 80, "mago")

let heroWarrior = new hero("Hércules", 20, "guerreiro")

let heroMonk = new hero("Aang", 112, "monge")

let heroNinja = new hero("Hanzo", 30, "ninja")

let heroRogue = new hero("Surdina", 17, "rogue") 
// hero type error test

//Hero one
heroMage.atacar()

// Hero two
heroWarrior.atacar()

// Hero tree
heroMonk.atacar()

// Hero four
heroNinja.atacar()

// Hero five - hero type error test
heroRogue.atacar()
