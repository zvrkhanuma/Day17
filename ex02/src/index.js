const MY_CAR = {
	wheels: 4,
	cylinders: 4,
	size: 2.2
};

function main(myCar) {
	// Only change code below this line

	// const cylinders = MY_CAR.cylinders;
	// const size = MY_CAR.size;

	const {
        cylinders, 
        size
	} = MY_CAR;
    return {"cylinder": cylinders, "Size": size};
	// Only change code above this line
}
console.log(main(MY_CAR));
module.exports = main;