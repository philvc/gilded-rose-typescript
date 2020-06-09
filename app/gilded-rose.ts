export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        const value = this.sellIn >= 0 ? 1 : 2;
        return this.decreaseQuality(value)
    }

    decreaseQuality(value: number) {

        const decreasedQuality = this.quality - value;
        const finalResult = decreasedQuality < 0 ? 0 : decreasedQuality;
        this.quality = finalResult;
        return this.quality;
    }

}

export class AgedBrieItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        const value = this.sellIn >= 0 ? 1 : 2;
        return this.increaseQuality(value)
    }


    increaseQuality(value: number) {
        const increasedQuality = this.quality + value;
        const finalResult = increasedQuality > 50 ? 50 : increasedQuality;
        this.quality = finalResult
        return this.quality
    }
}


export class ConjuredItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        const value = this.sellIn >= 0 ? 2 : 4;
        return this.decreaseQuality(value)
    }

    decreaseQuality(value: number) {
        const decreasedQuality = this.quality - value;
        const finalResult = decreasedQuality < 0 ? 0 : decreasedQuality;
        this.quality = finalResult
        return this.quality

    }
}

export class BackstageItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {

        const value = this.sellIn > 11 ? 1 : this.sellIn > 5 ? 2 : this.sellIn > 0 ? 3 : 0;
        return this.increaseQuality(value)
    }

    increaseQuality(value: number) {
        const increasedQuality = value === 0 ? 0 : this.quality + value;
        const finalResult = increasedQuality > 50 ? 50 : increasedQuality;
        this.quality = finalResult;
        return this.quality

    }
}

export class SulfurasItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        return this.quality
    }

}

export function itemFactory(item) {
    if (item.name === 'Conjured') {
        return new ConjuredItem(item.name, item.sellIn, item.quality)
    } else if (item.name.includes('Backstage passes')) {
        return new BackstageItem(item.name, item.sellIn, item.quality)
    } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return new SulfurasItem(item.name, item.sellIn, item.quality)
    } else if (item.name === 'Aged Brie') {
        return new AgedBrieItem(item.name, item.sellIn, item.quality)
    } else {
        return item
    }
}


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items.map((item: Item) => itemFactory(item));
    }

    updateQuality() {

        for (let i = 0; i < this.items.length; i++) {

            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // decrease sellIn by 1
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            this.items[i].updateQuality()
        }
        return this.items;
    }

} 