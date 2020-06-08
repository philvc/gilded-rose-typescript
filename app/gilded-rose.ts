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
        if (this.sellIn >= 0) {
            this.quality = this.quality > 0 ? this.quality - 1 : 0
            return this.quality
        } else {
            this.quality = this.quality > 1 ? this.quality - 2 : 0
            return this.quality
        }
    }

}

export class AgedBrieItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        if (this.sellIn >= 0) {
            this.quality = this.quality < 50 ? this.quality + 1 : 50
            return this.quality
        } else {
            this.quality = this.quality < 49 ? this.quality + 2 : 50
            return this.quality
        }
    }
}


export class ConjuredItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        if (this.sellIn >= 0) {
            this.quality = this.quality > 1 ? this.quality - 2 : 0
            return this.quality

        } else {
            this.quality = this.quality > 3 ? this.quality - 4 : 0
            return this.quality
        }
    }
}

export class BackstageItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {

        if (this.sellIn > 11) {
            this.quality = this.quality < 50 ? this.quality + 1 : 50
            return this.quality

        } else if (this.sellIn < 11 && this.sellIn > 5) {
            this.quality = this.quality < 49 ? this.quality + 2 : 50
            return this.quality

        } else if (this.sellIn < 6 && this.sellIn > 0) {
            this.quality = this.quality < 48 ? this.quality + 3 : 50
            return this.quality

        } else {
            this.quality = 0
            return this.quality
        }
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