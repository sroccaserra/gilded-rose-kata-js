// @ts-check

require('approvals').mocha();

const { Shop } = require("../src/gilded_rose");
const { Item } = require("../src/item");

describe('When running some tests', function () {
  it('should be able to use Approvals', function () {
    let data = '';

    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const gildedRose = new Shop(items);

    for (let day = 0; day < 30; day++) {
      data += `\n-------- day ${day} --------\n`;
      data += "name, sellIn, quality\n";
      items.forEach(item => {
        data += `${item.name}, ${item.sellIn}, ${item.quality}\n`
      });

      gildedRose.updateQuality();
    }

    this.verify(data, {
      reporters: ['gitdiff']
    });
  });
});
