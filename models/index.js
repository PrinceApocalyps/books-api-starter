const Book = require("./book");
const Review = require("./review");

Book.hasMany(Review, {
    foreignKey: 'bookId',
});
Review.belongsTo(Book, {
    foreignKey: "bookId"
});

module.exports = {
    Book,
    Review
}