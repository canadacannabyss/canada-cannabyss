import slugify from 'slugify';

class StringConverter {
   convertSlugToTitle(slug) {
    console.log('slug converter:', slug)
    var words = slug.split('-');
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    return words.join(' ');
  }

  toSlug(slug) {
    return slugify(slug)
  }
}

export default StringConverter;