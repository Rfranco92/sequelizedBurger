module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    // Giving the Author model a name of type STRING
    burger_name : { 
      type: DataTypes.STRING,
      allowNull: false
       }, 
    devoured : { 
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: DataTypes.DATE
  });

  return burger;
};

