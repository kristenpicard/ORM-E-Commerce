// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  // K10: Unique?
});

// Categories have many Products
Category.hasMany(Product, {
  // K10: Unique?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  // Alias for when data is retrieved
  as: "?1",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  // Alias for when data is retrieved
  as: "?2",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
