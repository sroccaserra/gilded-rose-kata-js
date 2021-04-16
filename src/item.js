class Item {
  /**
   * @param {string} name
   * @param {number} sellIn
   * @param {number} quality
   */
  constructor(name, sellIn, quality){
    /** @readonly */
    this.name = name;

    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports = {
  Item,
}
