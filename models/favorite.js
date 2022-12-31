// create a Mongoose Schema
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
	  user: {
		  	    type: mongoose.Schema.Types.ObjectId,
		  	    ref: 'User'
		  	  },
	  campsites: [{
		  	    type: mongoose.Schema.Types.ObjectId,
		  	    ref: 'Campsites'
		  	  }]
	  }, {
	  timestamps: true
});

// create a Mongoose Model
const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
