export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    increaseQuality() {
        return this.quality = this.quality + 1
    }
    decreaseQuality() {
        return this.quality = this.quality - 1
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
                // diminue la qualité de 1 
                if (this.items[i].quality > 0) {
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        this.items[i].decreaseQuality()
                    }
                }

                // si c'est un item conjured je diminue quality une deuxième fois
                if (this.items[i].name == 'Conjured') {
                    if (this.items[i].quality > 0) {
                        this.items[i].decreaseQuality()
                    }
                }
            } else {
                // j'augemente la quality de 1 
                if (this.items[i].quality < 50) {
                    this.items[i].increaseQuality()
                    // je continue à augmenter pour backstage
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        // augemente backstage quality
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].increaseQuality()
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].increaseQuality()
                            }
                        }
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // j'update sellIn de -1
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            // si sellIn passe en négatif je continue à diminuer qualité
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                // si SellIn est négatif je rediminue quality de 1
                                this.items[i].decreaseQuality()
                            }

                            // je continue de diminuer quality de 1 pour Conjured item
                            if (this.items[i].name == 'Conjured') {
                                if (this.items[i].quality > 0) {
                                    this.items[i].decreaseQuality()
                                }
                            }
                        }
                    } else {
                        // je met backstage à 0 si sellIn = 0
                        this.items[i].quality = 0
                    }
                } else {
                    // j'augmente aged brie de 1 quality une deuxième fois
                    if (this.items[i].quality < 50) {
                        this.items[i].increaseQuality()
                    }
                }
            }
        }

        return this.items;
    }
}
