var restaurantSchema = mongodb.Schema({
	restaurant_id: String,
	name: String,
	borough: String,
	cuisine: String,
	photo: String,
	photo_mimetype: String,
	address : {
		 street: String,
		 zipcode: String,
		 building: String,
		 coord: [Number,Number]
		 },
	grades: [{user: String, score: {type: Number, min: 0, max: 10}],
	owner: {type: String, required: true}
});

module.exports = restaurantSchema;
