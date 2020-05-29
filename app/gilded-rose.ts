export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                // diminue la qualité de -1 
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
                if (this.items[i].name == 'Conjured') {
                    if (this.items[i].quality > 0) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                // j'augemente la quality de 1
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    // je continue à augmenté pour backstage
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        // augemente backstage quality
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // j'update sellIn de -1
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            // si sellIn passe en négatif je continue à diminue
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                // si SellIn est négatif je rediminue quality de 1
                                this.items[i].quality = this.items[i].quality - 1
                            }
                            if (this.items[i].name == 'Conjured') {
                                if (this.items[i].quality > 0) {
                                    this.items[i].quality = this.items[i].quality - 1
                                }
                            }
                        }
                    } else {
                        // je met backstage à 0 si sellIn = 0
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    // j'augmente aged brie de 1 quality est pas de 50
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
