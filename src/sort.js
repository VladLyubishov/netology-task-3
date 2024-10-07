export default function sortHeroes(heroesArr){
    for (let j = 1; heroesArr.length > j; j++){
        for (let i = 0; heroesArr.length - j > i; i++){
            if (heroesArr[i].health > heroesArr[i + 1].health){
                let x = heroesArr[i]
                heroesArr[i] = heroesArr[i + 1]
                heroesArr[i + 1] = x 
            }
        }
    }
    return heroesArr;
}