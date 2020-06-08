import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });
    it('should decrease quality of item by 1', function () {
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([new Item('Dague', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });



    it('should increase quality by 1 of Aged Brie item when sellIn decreases by 1', function () {
        const sellIn = 5;
        const quality = 10;
        const gildedRose = new GildedRose([new Item('Aged Brie', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(sellIn - 1);
        expect(items[0].quality).to.equal(quality + 1);
    });
    it('should not change the quality of Aged Brie item when quality equals 50 and sellIn decreases by 1', function () {
        const sellIn = 5;
        const quality = 50;
        const gildedRose = new GildedRose([new Item('Aged Brie', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(sellIn - 1);
        expect(items[0].quality).to.equal(50);
    });

    it('should not change quality of Sulfuras item', function () {
        const sellIn = 0;
        const quality = 80;
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', sellIn, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(sellIn);
        expect(items[0].quality).to.equal(quality);
    });
    it('should decrease quality of item to 0 instead of -1', function () {
        const quality = 1;
        const sellIn = 1;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(0);
    });
    it('should decrease quality of conjured item by 2', function () {
        const quality = 6;
        const sellIn = 1;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(4);
        expect(items[0].sellIn).to.equal(0);
    });
    it('should decrease quality of conjured item by 4', function () {
        const quality = 6;
        const sellIn = 0;
        const gildedRose = new GildedRose([new Item('Conjured', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(2);
        expect(items[0].sellIn).to.equal(-1);
    });

    it('should increase quality of Backstage passes by 2 when sellIn is between 10 and 6', function () {
        const quality = 10;
        const sellIn = 10;
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(12);
        expect(items[0].sellIn).to.equal(9);
    });
    it('should increase Backstage passes quality by 1 when sellIn is above 10', function () {
        const quality = 10;
        const sellIn = 13;
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(11);
        expect(items[0].sellIn).to.equal(12);
    });
    it('should increase Backstage quality by 3 when sellIn is between 5 and 0', function () {
        const quality = 6;
        const sellIn = 5;
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(9);
        expect(items[0].sellIn).to.equal(4);
    });
    it('should decrease Backstage passes quality to 0 when sellIn is negative', function () {
        const quality = 6;
        const sellIn = 0;
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-1);
    });


});
