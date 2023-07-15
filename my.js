// Bismillah
// ustozimizning aytishlari bo'yicha Class bu tortning qolipi obj esa biscuitlari (biscuit classga qarab pishadi)
class Cars{
    // All of them members
    // they are keys or attribute ooor field
    name;
    year;
    price;
    color;
    constructor(marka , god, tsena, tsvet) {
        this.name = marka;
        this.year = god;
        this.price = tsena;
        this.color = tsvet;
    }
    // method or behaviour
    iHave(){

        return(`In Shaa Allah I Will Have car like ${this.name}`)
    }

}
// they are instance and they are related to Class (cars)
const bmw = new Cars("x6" , "2022" , "kooppala" , "darkBlue");
const nissan = new Cars("r34" , "1998" , "bu ham koop" , "blue")
console.log(bmw.iHave());
console.log(bmw);
console.log(nissan);

const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
console.log(item + 2);}
