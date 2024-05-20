const getTheTitles = function(objects) {
    titles = [];
    objects.forEach(object => {
        titles.push(object.title);
    });
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
