/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, navitems, kids, parents;

articleList = $('.article-list' );

navitems = articleList.find('nav-item');

parents = articleList.parents('div');

console.log (nav-item,  parents);