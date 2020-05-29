import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });
    it('should quality decrease 1', function () {
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([new Item('Dague', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });



    it('should aged brie item', function () {
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([new Item('Aged Brie', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(sellIn - 1);
        expect(items[0].quality).to.equal(quality + 1);
    });
    it('should Aged Brie item quality not over 50', function () {
        const sellIn = 5;
        const quality = 50;
        const gildedRose = new GildedRose([new Item('Aged Brie', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(sellIn - 1);
        expect(items[0].quality).to.equal(50);
    });

    it('should Sulfuras, Hand of Ragnaros quality not changed', function () {
        const sellIn = 0;
        const quality = 80;
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(sellIn);
        expect(items[0].quality).to.equal(quality);
    });
    it('should Conjured quality be 0', function () {
        const quality = 1;
        const sellIn = 1;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(0);
    });
    it('should Conjured quality reduce to 4', function () {
        const quality = 6;
        const sellIn = 1;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(4);
        expect(items[0].sellIn).to.equal(0);
    });
    it('should Conjured quality reduce to 2', function () {
        const quality = 6;
        const sellIn = 0;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(2);
        expect(items[0].sellIn).to.equal(-1);
    });
    it('should Conjured quality reduce to 2', function () {
        const quality = 6;
        const sellIn = -3;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        console.log('items0', items[0]);
        expect(items[0].quality).to.equal(2);
        expect(items[0].sellIn).to.equal(-4);
    });


});
