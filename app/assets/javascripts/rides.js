$(document).ready(function(){
  $('.rides-container__list-item--title').hover(titleHoverOnHandler, titleHoverOffHandler)
  $('.navigation__add-ride').on('click', '#star-one', oneStarHandler)
  $('.navigation__add-ride').on('click', '#star-two', twoStarHandler)
  $('.navigation__add-ride').on('click', '#star-three', threeStarHandler)
  $('.navigation__add-ride').on('click', '#star-four', fourStarHandler)
  $('.navigation__add-ride').on('click', '#star-five', fiveStarHandler)
  slideshowHandler()
});

var titleHoverOnHandler = function(){
  $(this).css('color', 'silver')
};

var titleHoverOffHandler = function(){
  $(this).css('color', 'white')
};

var oneStarHandler = function(){
  clearRating()
  oneStar()
};

var twoStarHandler = function(){
  clearRating()
  oneStar()
  twoStars()
};

var threeStarHandler = function(){
  clearRating()
  oneStar()
  twoStars()
  threeStars()
};

var fourStarHandler = function(){
  clearRating()
  oneStar()
  twoStars()
  threeStars()
  fourStars()
};

var fiveStarHandler = function(){
  clearRating()
  oneStar()
  twoStars()
  threeStars()
  fourStars()
  fiveStars()
};

clearRating = function(){
  $('.rating-stars').css('color', 'white')
}

oneStar = function(){
  $('#star-one').css('color', 'orange')
}

twoStars = function(){
  $('#star-two').css('color', 'orange')
}

threeStars = function(){
  $('#star-three').css('color', 'orange')
}

fourStars = function(){
  $('#star-four').css('color', 'orange')
}

fiveStars = function(){
  $('#star-five').css('color', 'orange')
}

var slideshowHandler = function(){
  $('.navigation__center-box').find('img').hide()
  setTimeout(randomPicture, 1000)
};

randomPicture = function(){
  var images = $('.navigation__center-box').find('img').map(function(){
    return this.className;
  })

  var newPicture = images[Math.floor(Math.random() * images.length)];
  $(`.${newPicture}`).show()
}




